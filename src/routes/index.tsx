import { Routes, Route, Navigate } from 'react-router-dom'
import Login from '../pages/login';
import OfxDashboard from '../pages/ofx';



export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/ofxdashboard" element={<OfxDashboard />} />
            <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
    );
};