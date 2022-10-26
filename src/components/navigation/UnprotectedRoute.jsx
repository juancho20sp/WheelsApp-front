import React from 'react';

// Routes
import { UserRoutes } from '../../utils';
import { Navigate, Outlet } from 'react-router-dom';

// Redux
import { useSelector } from 'react-redux';

const UnprotectedRoute = () => {
    const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
    
    return isLoggedIn ? <Navigate to={UserRoutes.home.path} replace /> : <Outlet />;
};

export default UnprotectedRoute;