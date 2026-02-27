import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS for browser requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { email, organization, role } = await req.json();

    if (!email || !organization || !role) {
      throw new Error('Missing required fields: email, organization, or role');
    }

    // You will need to verify a domain in Resend and update the 'from' email address here
    // Example: 'SkillBridge <notifications@yourdomain.com>'
    // For testing without a verified domain, you can only send to the email address associated with your Resend account, from 'onboarding@resend.dev'
    const fromEmail = Deno.env.get("RESEND_FROM_EMAIL") || 'onboarding@resend.dev';

    const data = await resend.emails.send({
      from: `SkillBridge Waitlist <${fromEmail}>`,
      to: [email],
      subject: 'You are on the SkillBridge Waitlist!',
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; padding: 40px 20px; background-color: #fafafa; color: #0f172a; text-align: center;">
          <div style="background-color: #ffffff; padding: 40px 30px; border-radius: 16px; border: 1px solid #e2e8f0; max-width: 500px; margin: 0 auto; box-shadow: 0 4px 20px -5px rgba(0, 0, 0, 0.05); text-align: left;">
            <div style="text-align: center; margin-bottom: 24px;">
              <h1 style="color: #2563eb; font-size: 26px; font-weight: 800; margin: 0; letter-spacing: -0.5px;">SkillBridge</h1>
            </div>
            
            <h2 style="font-size: 20px; font-weight: 600; margin-bottom: 20px; color: #0f172a;">You're on the list!</h2>
            
            <p style="font-size: 16px; line-height: 1.6; color: #475569; margin-bottom: 16px;">
              Thank you for registering your interest in SkillBridge. We're actively building the platform and are thrilled to have you join our early waitlist.
            </p>
            
            <div style="background-color: #f1f5f9; padding: 16px; border-radius: 8px; margin-bottom: 24px; border: 1px solid #e2e8f0;">
              <p style="margin: 0 0 8px 0; font-size: 14px; color: #64748b;"><strong>Registration Details:</strong></p>
              <ul style="margin: 0; padding-left: 20px; font-size: 14px; color: #475569; line-height: 1.5;">
                <li><strong>Role:</strong> ${role}</li>
                <li><strong>Organization:</strong> ${organization}</li>
              </ul>
            </div>
            
            <p style="font-size: 16px; line-height: 1.6; color: #475569; margin-bottom: 30px;">
              We'll be sure to notify you when early access becomes available.
            </p>
            
            <div style="border-top: 1px solid #e2e8f0; padding-top: 24px; text-align: center; font-size: 13px; color: #94a3b8;">
              <p style="margin-bottom: 8px;">You are receiving this email because you registered for the SkillBridge waitlist.</p>
              <p style="margin: 0;"><a href="https://yourdomain.com/unsubscribe?email=${encodeURIComponent(email)}" style="color: #64748b; text-decoration: underline;">Unsubscribe</a> from this list.</p>
            </div>
          </div>
        </div>
      `,
    });

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    });
  }
});
