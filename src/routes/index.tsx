import { Routes, Route, Navigate } from 'react-router-dom'

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<p>Login</p>} />

            <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
    );
};