import React, { useState } from 'react';

// Components
import Swal from 'sweetalert2';

// Hooks
import { UserRoutes, useHttp } from '../';

// Navigation
import { useNavigate } from 'react-router-dom';

// Redux
import { useDispatch } from 'react-redux';
import {
    login,
    logout,
    startLoading,
    stopLoading
} from '../../redux';


const useLogin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { post } = useHttp();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const resetForm = () => {
        setEmail('');
        setPassword('');
    };

    const logoutUser = () => {
        dispatch(logout());
    };

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
        dispatch(startLoading());

        const url = `${process.env.REACT_APP_BACKEND_URL}/auth`;
        const data = {
            email,
            password
        };

        try {
            const loginData = await post(url, data);
            const token = loginData?.token;
            const message = loginData?.message;

            if (token) {
                dispatch(login(token));
            }

            if (message) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Usuario o contraseña incorrectos',
                    footer: `<p>${message}<p/>`
                });
            }


        } catch (err) {
            console.error(err);
        } finally {
            resetForm();
            dispatch(stopLoading());
        }
    };

    const handleRegisterHereClick = (event) => {
        event.preventDefault();

        navigate(UserRoutes.signUp.path);
    };

    return {
        email,
        handleEmailChange,
        handleLoginButtonClick,
        handlePasswordChange,
        handleRegisterHereClick,
        logoutUser,
        password
    };
};

export default useLogin;