import React from 'react';

// Components
import { FaRegUser } from 'react-icons/fa';
import { BiMessageDots } from 'react-icons/bi';

const PassedTripCard = ({
    carModel = 'Nissan March Azul',
    carPlate = 'JKL 256',
    date = 'Salida 3:00pm - Llegada 5:00pm',
    driverName = 'Juan David Murillo',
    driverStars = '5.0',
    isDriver = true,
    passengers = ['pass 1', 'pass 2'],
    stops = ['stop 1', 'stop 2', 'stop 3'],
    title = 'Trayecto a la Tadeo',
    tripFare = '5000',
}) => {

    const currencyFormat = (string) => Number(string).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 });

    return (
        <div className='passedTripCard passedTripCard__container'>
            <header className='passedTripCard__header' style={{'borderBottom': isDriver ? '' : 'unset'}}>
                <p className='passedTripCard__title'>{title}</p>
                <p className='passedTripCard__date'>{date}</p>
            </header>

            {!isDriver && <main className='passedTripCard__main'>
                <div className='passedTripCard__driver--avatar'>
                    <FaRegUser className='passedTripCard__driver--avatar-icon' />
                </div>

                <div className='passedTripCard__driver--info-container'>
                    <div className='passedTripCard__driver--info'>
                        <p className='passedTripCard__driver--info__name'>{driverName} · </p>
                        <p className='passedTripCard__driver--info__stars'>&#9733; {driverStars}</p>
                    </div>
                    <div className='passedTripCard__driver--info'>
                        <p className='passedTripCard__driver--info__model'>{carModel} · </p>
                        <p className='passedTripCard__driver--info__plate'>{carPlate}</p>
                    </div>
                </div>

                <div className='passedTripCard__driver--cta'>{<BiMessageDots />}</div>
            </main>}

            <footer className='passedTripCard__footer'>
                <p className='passedTripCard__trip--fare passedTripCard__pill'>{`${currencyFormat(tripFare)} COP`}</p>
                <p className='passedTripCard__trip--stops passedTripCard__pill'>{`${stops.length} ${stops.length > 1 ? 'paradas' : 'parada'} `}</p>
                {isDriver && <p className='passedTripCard__trip--passengers passedTripCard__pill'>{`${passengers.length} ${passengers.length > 1 ? 'Cupos tomados' : 'Cupo tomado'} `}</p>}
            </footer>
        </div>
    );
};

export default PassedTripCard;