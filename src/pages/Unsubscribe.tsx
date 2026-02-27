import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle2, AlertCircle, ArrowLeft, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function Unsubscribe() {
    const [searchParams] = useSearchParams();
    const emailParam = searchParams.get('email');

    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        // Automatically trigger unsubscribe if email is in the URL
        if (emailParam && status === 'idle') {
            handleUnsubscribe();
        } else if (!emailParam) {
            setStatus('error');
            setErrorMessage('No email address provided in the link.');
        }
    }, [emailParam]);

    const handleUnsubscribe = async () => {
        if (!emailParam) return;

        setStatus('loading');

        try {
            // In a real production app, you might want a more secure token-based approach. 
            // For this waitlist, matching the email is sufficient to remove them.
            const { error } = await supabase
                .from('waitlist_signups')
                .delete()
                .eq('email', emailParam.toLowerCase());

            if (error) {
                throw error;
            }

            setStatus('success');
        } catch (err) {
            console.error('Error unsubscribing:', err);
            setStatus('error');
            setErrorMessage('We encountered an error while trying to unsubscribe you. Please try again later.');
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-md">
                <Link to="/" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 mb-6 transition-colors">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to SkillBridge
                </Link>

                <Card className="bg-white border-slate-200/60 p-8 rounded-3xl shadow-xl shadow-slate-900/5">
                    <div className="text-center">
                        {status === 'loading' || status === 'idle' ? (
                            <div className="py-8">
                                <Loader2 className="h-10 w-10 text-blue-600 animate-spin mx-auto mb-4" />
                                <h1 className="text-2xl font-bold text-slate-900 mb-2">Processing Request</h1>
                                <p className="text-slate-500">Removing {emailParam} from the waitlist...</p>
                            </div>
                        ) : status === 'success' ? (
                            <div className="py-4">
                                <div className="mx-auto mb-6 flex items-center justify-center h-16 w-16 rounded-full bg-red-100">
                                    <CheckCircle2 className="h-8 w-8 text-red-600" />
                                </div>
                                <h1 className="text-2xl font-bold text-slate-900 mb-3">Successfully Unsubscribed</h1>
                                <p className="text-slate-600 mb-8">
                                    <strong>{emailParam}</strong> has been removed from the SkillBridge waitlist. You will no longer receive updates from us.
                                </p>
                                <Link to="/">
                                    <Button className="w-full h-12 bg-slate-900 hover:bg-slate-800 text-white rounded-xl">
                                        Return to Homepage
                                    </Button>
                                </Link>
                            </div>
                        ) : (
                            <div className="py-4">
                                <div className="mx-auto mb-6 flex items-center justify-center h-16 w-16 rounded-full bg-amber-100">
                                    <AlertCircle className="h-8 w-8 text-amber-600" />
                                </div>
                                <h1 className="text-2xl font-bold text-slate-900 mb-3">Unsubscribe Failed</h1>
                                <p className="text-slate-600 mb-8">
                                    {errorMessage}
                                </p>
                                <Link to="/">
                                    <Button variant="outline" className="w-full h-12 rounded-xl">
                                        Return to Homepage
                                    </Button>
                                </Link>
                            </div>
                        )}
                    </div>
                </Card>
            </div>
        </div>
    );
}
