import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../../App';
import Unsubscribe from './Unsubscribe';

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/unsubscribe" element={<Unsubscribe />} />
            </Routes>
        </BrowserRouter>
    );
}
