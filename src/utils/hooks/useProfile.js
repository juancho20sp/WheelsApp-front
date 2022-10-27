import React, { useEffect } from 'react';

// Components
import Swal from 'sweetalert2';

// Hooks
import { useHttp } from '..';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import {
    startLoading,
    stopLoading,
    setUserData
} from '../../redux';


const useProfile = () => {
    const { get } = useHttp();
    const dispatch = useDispatch();

    const { isDriver, userId, token } = useSelector((state) => state.login);

    useEffect(() => {
        const getData = async () => {
            dispatch(startLoading());

            const url = `${process.env.REACT_APP_BACKEND_URL}/users/${userId}`;

            try {
                const userData = await get(url, token);
                const message = userData?.message;

                if (message) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Algo salió mal',
                        footer: `<p>${message}<p/>`
                    });
                }

                dispatch(setUserData(userData));
                console.log(userData);
            } catch (err) {
                console.error(err);
            } finally {
                dispatch(stopLoading());
            }
        };

        getData();
    }, []);

    return {
        isDriver,
    };
};

export default useProfile;