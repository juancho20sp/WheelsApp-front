import React, { useState } from 'react';

// Components
import Swal from 'sweetalert2';

// Hooks
import { UserRoutes, useHttp } from '..';

// Navigation
import { useNavigate } from 'react-router-dom';

// Redux
import { useDispatch } from 'react-redux';
import {
    startLoading,
    stopLoading
} from '../../redux';

const useSignUp = () => {
    const { post } = useHttp();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // MODALS
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isVehicleModal, setIsVehicleModal] = useState(false);
    const [isDriver, setIsDriver] = useState(false);

    // PASSENGER
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('CITY TDB');
    const [organization, setOrganization] = useState('');
    const [profilePhoto, setProfilePhoto] = useState('PHOTO TBD');

    // VEHICLE
    const [idUser, setIdUser] = useState('');
    const [soat, setSoat] = useState('SOAT TBD');
    const [seats, setSeats] = useState('');
    const [propertyCard, setPropertyCard] = useState('PROPERTY CARD TBD');
    const [vehicleDescription, setVehicleDescription] = useState('');
    const [carPhoto, setCarPhoto] = useState('PHOTO TBD');
    const [isActive, setIsActive] = useState(true);
    const [licensePlate, setLicensePlate] = useState('');
    const [model, setModel] = useState('');

    const resetComponent = () => {
        // MODALS
        setIsModalOpen(false);
        setIsVehicleModal(false);
        setIsDriver(false);

        // PASSENGER
        setName('');
        setLastname('');
        setEmail('');
        setPassword('');
        setPhone('');
        setCity('CITY TDB');
        setOrganization('');
        setProfilePhoto('PHOTO TBD');

        // VEHICLE
        setIdUser('');
        setSoat('SOAT TBD');
        setSeats('');
        setPropertyCard('PROPERTY CARD TBD');
        setVehicleDescription('');
        setCarPhoto('CAR PHOTO TBD');
        setIsActive(true);
        setLicensePlate('');
        setModel('');
    };

    // MODAL
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleOpenVehicleModal = () => {
        setIsVehicleModal(true);
    };

    const handleCloseVehicleModal = () => {
        setIsVehicleModal(false);
    };

    // FORM PASSENGER
    const handleNameChange = (event) => {
        event.preventDefault();
        setName(event.target.value);
    };

    const handleLastnameChange = (event) => {
        event.preventDefault();
        setLastname(event.target.value);
    };

    const handlePhoneChange = (event) => {
        event.preventDefault();
        setPhone(event.target.value);
    };

    const handleCityChange = (event) => {
        event.preventDefault();
        setCity(event.target.value);
    };

    const handleOrganizationChange = (event) => {
        event.preventDefault();
        setOrganization(event.target.value);
    };

    const handleEmailChange = (event) => {
        event.preventDefault();
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        event.preventDefault();
        setPassword(event.target.value);
    };

    // FORM VEHICLE
    const handleSeatsChange = (event) => {
        event.preventDefault();
        setSeats(event.target.value);
    };

    const handleVehicleDescriptionChange = (event) => {
        event.preventDefault();
        setVehicleDescription(event.target.value);
    };

    const handleLicensePlateChange = (event) => {
        event.preventDefault();
        setLicensePlate(event.target.value);
    };

    const handleModelChange = (event) => {
        event.preventDefault();
        setModel(event.target.value);
    };

    // HANDLERS
    const handleDriverButtonClick = async (event) => {
        event.preventDefault();

        handleOpenModal();
        setIsDriver(true);
    };

    const handlePassengerButtonClick = async (event) => {
        event.preventDefault();

        handleOpenModal();
        setIsDriver(false);
    };

    const handleRegisterPassengerButtonClick = async (event) => {
        event.preventDefault();
        dispatch(startLoading());

        let userId = null;
        const url = `${process.env.REACT_APP_BACKEND_URL}/users`;
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

        try {
            const userData = await post(url, data);
            const message = userData?.message;
            userId = userData?.id;

            if (message) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Algo salió mal',
                    footer: `<p>${message}<p/>`
                });
            }
        } catch (err) {
            console.error(err);
        } finally {
            dispatch(stopLoading());
        }

        resetComponent();

        if (userId) {
            Swal.fire({
                icon: 'success',
                title: 'Registro éxitoso',
                text: '¡Bienvenido a Wheelsapp!'
            });
            navigate(UserRoutes.login.path);
        }
    };

    const handleRegisterDriverButtonClick = async (event) => {
        event.preventDefault();
        dispatch(startLoading());

        let userId = null;
        let token = null;
        let vehicleId = null;

        // REGISTER USER
        const userUrl = `${process.env.REACT_APP_BACKEND_URL}/users`;
        const driverData = {
            name,
            lastName: lastname,
            email,
            password,
            phoneNumber: phone,
            city,
            organization,
            profilePhoto
        };

        try {
            const userData = await post(userUrl, driverData);
            const message = userData?.message;
            userId = userData?.id;

            if (message) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Algo salió mal',
                    footer: `<p>${message}<p/>`
                });
            }
        } catch (err) {
            console.error(err);
            return;
        } finally {
            dispatch(stopLoading());
        }

        // LOGIN USER
        const loginUrl = `${process.env.REACT_APP_BACKEND_URL}/auth`;
        const loginData = {
            email,
            password
        };

        try {
            const loginInfo = await post(loginUrl, loginData);
            token = loginInfo?.token;

            console.log(token);

        } catch (err) {
            console.error(err);
        } finally {
            dispatch(stopLoading());
        }

        // REGISTER VEHICLE
        const vehicleUrl = `${process.env.REACT_APP_BACKEND_URL}/vehicles`;
        const vehicleData = {
            idUser: userId,
            soat,
            licensePlate,
            model,
            puestos: seats,
            propertyCard,
            description: vehicleDescription,
            photo: carPhoto,
            isActive,
        };

        try {
            const vehicleInfo = await post(vehicleUrl, vehicleData, token);
            const message = vehicleInfo?.message;
            vehicleId = vehicleInfo?.id;

            console.log(vehicleData);

            if (message) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Algo salió mal',
                    footer: `<p>${message}<p/>`
                });
            }
        } catch (err) {
            console.error(err);
            return;
        } finally {
            dispatch(stopLoading());
        }

        resetComponent();

        Swal.fire({
            icon: 'success',
            title: 'Registro éxitoso',
            text: '¡Bienvenido a Wheelsapp!'
        });
        navigate(UserRoutes.login.path);

    };

    const handleDriverContinueClick = (event) => {
        event.preventDefault();
        handleCloseModal();
        handleOpenVehicleModal();
    };

    const handleLoginHereClick = (event) => {
        event.preventDefault();
        navigate(UserRoutes.login.path);
    };

    return {
        carPhoto,
        city,
        email,
        handleCityChange,
        handleCloseModal,
        handleCloseVehicleModal,
        handleDriverButtonClick,
        handleDriverContinueClick,
        handleEmailChange,
        handleLastnameChange,
        handleLicensePlateChange,
        handleLoginHereClick,
        handleModelChange,
        handleNameChange,
        handleOpenModal,
        handleOrganizationChange,
        handlePassengerButtonClick,
        handlePasswordChange,
        handlePhoneChange,
        handleRegisterDriverButtonClick,
        handleRegisterPassengerButtonClick,
        handleSeatsChange,
        handleVehicleDescriptionChange,
        idUser,
        isActive,
        isDriver,
        isModalOpen,
        isVehicleModal,
        lastname,
        licensePlate,
        model,
        name,
        organization,
        password,
        phone,
        profilePhoto,
        propertyCard,
        seats,
        soat,
        vehicleDescription,
    };
};

export default useSignUp;