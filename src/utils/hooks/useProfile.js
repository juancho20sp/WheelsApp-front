import React, { useState, useEffect } from 'react';

// Components
import Swal from 'sweetalert2';

// Hooks
import { useHttp } from '..';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import {
    startLoading,
    stopLoading,
    setSelectedVehicle,
    setUserData
} from '../../redux';


const useProfile = () => {
    const { get } = useHttp();
    const dispatch = useDispatch();

    const { isDriver, userId, token } = useSelector((state) => state.login);

    const [vehicle, setVehicle] = useState('');

    useEffect(() => {
        const getData = async () => {
            dispatch(startLoading());

            const url = `${process.env.REACT_APP_BACKEND_URL}/users/${userId}`;
            const vehicleUrl = `${process.env.REACT_APP_BACKEND_URL}/vehicles/user/${userId}`;

            try {
                const userData = await get(url, token);
                const vehicleData = await get(vehicleUrl, token);
                const message = userData?.message;
                const messageVehicle = vehicleData?.message;

                if (message || messageVehicle) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Algo salió mal',
                        footer: `<p>${message || messageVehicle}<p/>`
                    });
                }

                const finalData = {...userData, vehicles: vehicleData};
                dispatch(setSelectedVehicle(vehicleData[0]));
                dispatch(setUserData(finalData));
            } catch (err) {
                console.error(err);
            } finally {
                dispatch(stopLoading());
            }
        };

        getData();
    }, []);

    const handleVehicleChange = (event) => {
        event.preventDefault();
        setVehicle(event.target.value);
        dispatch(setSelectedVehicle(event.target.value));
    };

    return {
        isDriver,
        handleVehicleChange
    };
};

export default useProfile;