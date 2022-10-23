import React from 'react';

// Components
import { PassedTripCard } from '..';

const PassedTrips = () => {
  return (
    <div className='passedTrips passedTrips__container'>
        <p className='passedTrips__title'>Viajes Recientes</p>

        <div className='passedTrips__cards'>
            <PassedTripCard />
        </div>
    </div>
  );
};

export default PassedTrips;