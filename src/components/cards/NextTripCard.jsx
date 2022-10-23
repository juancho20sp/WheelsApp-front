import React from 'react';

// Components
import { FaRegUser } from 'react-icons/fa';
import { BiMessageDots } from 'react-icons/bi';

const NextTripCard = ({
    availableSeats = '3',
    carModel = 'Nissan March Azul',
    carPlate = 'JKL 256',
    date = 'Salida 3:00pm - Llegada 5:00pm',
    driverName = 'Juan David Murillo',
    driverStars = '5.0',
    isDriver = true,
    stops = ['stop 1', 'stop 2', 'stop 3'],
    title = 'Trayecto a Los Andes',
}) => {
    return (
        <div className='nextTripCard nextTripCard__container'>
            <header className='nextTripCard__header'>
                <p className='nextTripCard__title'>{title}</p>
                <p className='nextTripCard__date'>{date}</p>
            </header>

            <main className='nextTripCard__main' style={{'border-bottom': isDriver ? '' : 'unset'}}>
                <div className='nextTripCard__stops--info-container'>
                    <p className='nextTripCard__stops--title'>Paradas programadas</p>
                    <p className='nextTripCard__stops--seats-available'>{`${availableSeats} ${availableSeats > 1 ? 'Cupos disponibles' : 'Cupo disponible'}`}</p>
                </div>

                <div className='nextTripCard__stops'>
                    <ul className='nextTripCard__stops--list'>
                        {stops.map((stop, idx) => <li key={idx}className='nextTripCard__stops--list-item'> - {stop}</li>)}
                    </ul>
                </div>
            </main>

            {isDriver && <footer className='nextTripCard__footer'>
                <div className='nextTripCard__driver--avatar'>
                    <FaRegUser className='nextTripCard__driver--avatar-icon'/>
                </div>

                <div className='nextTripCard__driver--info-container'>
                    <div className='nextTripCard__driver--info'>
                        <p className='nextTripCard__driver--info__name'>{driverName} · </p>
                        <p className='nextTripCard__driver--info__stars'>&#9733; {driverStars}</p>
                    </div>
                    <div className='nextTripCard__driver--info'>
                        <p className='nextTripCard__driver--info__model'>{carModel} · </p>
                        <p className='nextTripCard__driver--info__plate'>{carPlate}</p>
                    </div>
                </div>

                <div className='nextTripCard__driver--cta'>{<BiMessageDots />}</div>
            </footer>}
        </div>
    );
};

export default NextTripCard;