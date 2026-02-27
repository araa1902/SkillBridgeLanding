import { createClient } from '@supabase/supabase-js';
import { FormData } from '../../types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(supabaseUrl, supabaseKey);

export interface SubmitWaitlistResponse {
  success: boolean;
  message: string;
  error?: string;
  data?: {
    id: string;
    email: string;
    signup_position: number;
  };
}

/**
 * Submit a waitlist signup to the database
 * @param formData - The form data containing user information
 * @returns Response indicating success or failure with position data
 */
export async function submitWaitlistSignup(
  formData: FormData
): Promise<SubmitWaitlistResponse> {
  try {
    // Validate required fields
    if (!formData.email || !formData.organization) {
      return {
        success: false,
        message: 'Validation failed',
        error: 'Email and organization are required fields'
      };
    }

    // Validate email format
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(formData.email)) {
      return {
        success: false,
        message: 'Invalid email format',
        error: 'Please enter a valid email address'
      };
    }

    // Insert the new signup
    // The database triggers will handle:
    // - Checking for duplicates (UNIQUE constraint)
    // - Setting signup_position
    // - Setting status to 'pending'
    // - Validating email format (CHECK constraint)
    const { data, error } = await supabase
      .from('waitlist_signups')
      .insert([
        {
          email: formData.email.toLowerCase(),
          name: formData.name || null,
          role: formData.role,
          organization: formData.organization,
        }
      ])
      .select('id, email, signup_position');

    if (error) {
      console.error('Supabase error:', error);

      // Handle duplicate email error
      if (error.code === '23505' || error.message?.includes('duplicate')) {
        return {
          success: false,
          message: 'Email already registered',
          error: 'This email is already on the waitlist'
        };
      }

      return {
        success: false,
        message: 'Failed to save signup',
        error: error.message
      };
    }

    if (!data || data.length === 0) {
      return {
        success: false,
        message: 'Failed to save signup',
        error: 'No data returned from database'
      };
    }

    // Trigger confirmation email via Edge Function
    try {
      const { error: invokeError } = await supabase.functions.invoke('send-waitlist-email', {
        body: {
          email: data[0].email,
          organization: formData.organization,
          role: formData.role
        }
      });

      if (invokeError) {
        console.error('Failed to send confirmation email:', invokeError);
        // We still continue and return success because the database insert succeeded
      }
    } catch (edgeError) {
      console.error('Error invoking edge function:', edgeError);
    }

    return {
      success: true,
      message: 'Successfully joined the waitlist',
      data: {
        id: data[0].id,
        email: data[0].email,
        signup_position: data[0].signup_position,
      }
    };
  } catch (err) {
    console.error('Unexpected error:', err);
    return {
      success: false,
      message: 'An unexpected error occurred',
      error: err instanceof Error ? err.message : 'Unknown error'
    };
  }
}

