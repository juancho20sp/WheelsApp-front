import React, { useState } from 'react';

import { UserRoutes, useHttp } from '..';
import { useNavigate } from 'react-router-dom';


const useSignUp = () => {
    const { post } = useHttp();
    const navigate = useNavigate();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [name, setName] = useState('react name');
    const [lastname, setLastname] = useState('react lastname');
    const [email, setEmail] = useState('react@mail.com');
    const [password, setPassword] = useState('react');
    const [phone, setPhone] = useState('1233567');
    const [city, setCity] = useState('Citytest');
    const [organization, setOrganization] = useState('organizaiton');
    const [profilePhoto, setProfilePhoto] = useState('photo');

    // MODAL
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    // FORM
    const handleEmailChange = (event) => {
        event.preventDefault();
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        event.preventDefault();
        setPassword(event.target.value);
    };

    const handleRegisterDriverButtonClick = async (event) => {
        event.preventDefault();

        const url = `${process.env.REACT_APP_BACKEND_URL}/login`;
        const data = {
            email,
            password
        };

        // try {
        //     const loginData = await post(url, data);
        //     console.log(loginData);

        // } catch(err) {
        //     console.error(err);
        // }

        console.log(email, password);
    };

    const handleRegisterPassengerButtonClick = async (event) => {
        event.preventDefault();

        handleOpenModal();

        const url = `${process.env.REACT_APP_BACKEND_URL}/users/`;
        const data = {
            name,
            lastName: lastname,
            email,
            password,
            phoneNumber: phone,
            city,
            organization,
            profilePhoto
        };

        console.log(data);

        try {
            const loginData = await post(url, data);
            console.log(loginData);

        } catch(err) {
            console.error(err);
        }

        console.log(email, password);
    };

    const handleLoginHereClick = (event) => {
        event.preventDefault();

        navigate(UserRoutes.login.path);
    };

    return {
        handleEmailChange,
        handlePasswordChange,
        handleRegisterDriverButtonClick,
        handleRegisterPassengerButtonClick,
        handleLoginHereClick,
        handleOpenModal,
        handleCloseModal,
        isModalOpen
    };
};

export default useSignUp;