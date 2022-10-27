import React, { useState } from 'react';

// Navigation
import { UserRoutes } from '..';
import { useNavigate, useLocation } from 'react-router-dom';

// Redux
import { useSelector } from 'react-redux';

const useHeader = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isDriver = useSelector((state) => state.login.isDriver);

    const seeingAsDriver = location.pathname.includes('/driver');

    const [ctaText, setCtaText] = useState(seeingAsDriver ? 'Ver como pasajero' : 'Ver como conductor');
    const [showCta, setShowCta] = useState((location.pathname === '/' || location.pathname === '/driver') && isDriver);

    const handleCtaClick = () => {
        const route = seeingAsDriver ? UserRoutes.home.path : UserRoutes.homeDriver.path;
        navigate(route);
    };

    return {
        showCta,
        ctaText,
        handleCtaClick
    };
};

export default useHeader;