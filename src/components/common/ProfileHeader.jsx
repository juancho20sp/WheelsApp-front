import React from 'react';

// Components
import { FaRegUser } from 'react-icons/fa';

const ProfileHeader = ({
    userImage = '',
    userName = 'Juan David Murillo',
    stars = '5.0',
    vehicleDescription = 'Nissan March Azul',
    vehiclePlate = 'JKL 256'
}) => {
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

                <div className='profileHeader__info'>
                    <p className='profileHeader__info--model'>{vehicleDescription} · </p>
                    <p className='profileHeader__info--plate'>&#9733; {vehiclePlate}</p>
                </div>

                <div className='profileHeader__info'>
                    <button className='profileHeader__update-profile-cta'>Editar perfil</button>
                </div>

            </div>
        </div>
    );
};


export default ProfileHeader;