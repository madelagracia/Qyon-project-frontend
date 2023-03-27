import { Routes, Route, Navigate } from 'react-router-dom'
import OfxDashboard from '../pages/ofx/Ofx';
import Login from '../pages/login/login';

export const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/ofxdashboard" element={<OfxDashboard />} />
            <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
    );
};


