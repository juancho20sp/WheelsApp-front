import React, { useState } from 'react';

import { UserRoutes, useHttp } from '../';
import { useNavigate } from 'react-router-dom';


const useLogin = () => {
    const { post } = useHttp();
    const navigate = useNavigate();
    const [email, setEmail] = useState('Admmin@mail.com');
    const [password, setPassword] = useState('Admmin');

    const handleEmailChange = (event) => {
        event.preventDefault();
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        event.preventDefault();
        setPassword(event.target.value);
    };

    const handleLoginButtonClick = async (event) => {
        event.preventDefault();

        const url = `${process.env.REACT_APP_BACKEND_URL}/auth`;
        const data = {
            email,
            password
        };

        try {
            const loginData = await post(url, data);
            console.log(loginData);

        } catch(err) {
            console.error(err);
        }

        console.log(email, password);
    };

    const handleRegisterHereClick = (event) => {
        event.preventDefault();

        navigate(UserRoutes.signUp.path);
    };

    return {
        handleEmailChange,
        handlePasswordChange,
        handleLoginButtonClick,
        handleRegisterHereClick
    };
};

export default useLogin;