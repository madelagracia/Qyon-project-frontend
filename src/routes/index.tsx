import { Routes, Route, Navigate } from 'react-router-dom'
import Login from '../pages/login/login';
import { Dashboard } from '../pages/dashboard/Dashboard';
import { useAppThemeContext } from '../shared/contexts/ThemeContext';

export const AppRoutes = () => {
   // const {toggleTheme} = useAppThemeContext

    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/ofx" element={<Dashboard />} />
            <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
    );
};


