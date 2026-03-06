import React, { createContext, useContext, useState, ReactNode } from 'react';
import { FormData, UserRole } from '../../types';

type WaitlistStep = 'email' | 'profile' | 'success';

interface WaitlistContextType {
    currentStep: WaitlistStep;
    setCurrentStep: (step: WaitlistStep) => void;
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
    acceptedTerms: boolean;
    setAcceptedTerms: (accepted: boolean) => void;
    submitError: string | null;
    setSubmitError: (error: string | null) => void;
    resetForm: () => void;
}

const WaitlistContext = createContext<WaitlistContextType | undefined>(undefined);

export const WaitlistProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [currentStep, setCurrentStep] = useState<WaitlistStep>('email');
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        role: 'Student',
        organization: ''
    });
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const resetForm = () => {
        setFormData({
            name: '',
            email: '',
            role: 'Student',
            organization: ''
        });
        setAcceptedTerms(false);
        setSubmitError(null);
        setCurrentStep('email');
    };

    return (
        <WaitlistContext.Provider value={{
            currentStep,
            setCurrentStep,
            formData,
            setFormData,
            acceptedTerms,
            setAcceptedTerms,
            submitError,
            setSubmitError,
            resetForm
        }}>
            {children}
        </WaitlistContext.Provider>
    );
};

export const useWaitlist = () => {
    const context = useContext(WaitlistContext);
    if (context === undefined) {
        throw new Error('useWaitlist must be used within a WaitlistProvider');
    }
    return context;
};
