import React from 'react';

// Components
import { FaRegUser } from 'react-icons/fa';

// Hooks
import { useLogin } from '../../utils';

// Redux
import { useSelector } from 'react-redux';

const ProfileHeader = ({
    userImage = '',
    userName = 'Juan David Murillo',
    stars = '5.0',
    vehicleDescription = 'Nissan March Azul',
    vehiclePlate = 'JKL 256'
}) => {
    const { logoutUser } = useLogin();
    const isDriver = useSelector((state) => state.login.isDriver);

    return (
        <div className='profileHeader profileHeader__container'>
            <div className='profileHeader__avatar'>
                <FaRegUser className='profileHeader__avatar-icon' />
            </div>
            <div className='profileHeader__information'>
                <div className='profileHeader__info'>
                    <p className='profileHeader__info--name'>{userName} · </p>
                    <p className='profileHeader__info--stars'>&#9733; {stars}</p>
                </div>

                {isDriver && <div className='profileHeader__info'>
                    <p className='profileHeader__info--model'>{vehicleDescription} · </p>
                    <p className='profileHeader__info--plate'>&#9733; {vehiclePlate}</p>
                </div>}

                <div className='profileHeader__cta--container'>
                    <button className='profileHeader__update-profile-cta'>Editar perfil</button>
                    <button className='profileHeader__update-profile-logout' onClick={() => logoutUser()}>Cerrar sesión</button>
                </div>

            </div>
        </div>
    );
};


export default ProfileHeader;