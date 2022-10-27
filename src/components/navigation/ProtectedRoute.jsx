import React from 'react';

// Routes
import { UserRoutes } from '../../utils';
import { Navigate, Outlet } from 'react-router-dom';

// Redux
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ onlyForDrivers = false }) => {
    const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
    const isDriver = useSelector((state) => state.login.isDriver);
    
    if (isLoggedIn) {
        if (onlyForDrivers) {
            return isDriver ? <Outlet /> : <Navigate to={UserRoutes.home.path} replace />;
        }

        return <Outlet /> ;
    } else {
        return <Navigate to={UserRoutes.login.path} replace />;
    }
};

export default ProtectedRoute;