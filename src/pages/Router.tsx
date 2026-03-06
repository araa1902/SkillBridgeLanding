import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../../App';
import Unsubscribe from './Unsubscribe';
import TermsOfService from './TermsOfService';
import PrivacyPolicy from './PrivacyPolicy';

import { WaitlistProvider } from '../context/WaitlistContext';
import ScrollToTop from '../components/ScrollToTop';

export default function AppRouter() {
    return (
        <BrowserRouter>
            <WaitlistProvider>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/unsubscribe" element={<Unsubscribe />} />
                    <Route path="/terms-of-service" element={<TermsOfService />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                </Routes>
            </WaitlistProvider>
        </BrowserRouter>
    );
}
