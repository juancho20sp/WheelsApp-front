import React from 'react';

// Components
import { NextTripCard } from '../';

const NextTrips = () => {
  return (
    <div className='nextTrips nextTrips__container'>
        <p className='nextTrips__title'>Próximos Viajes</p>
        <p className='nextTrips__date'>Noviembre 15 de 2022</p>

        <div className='nextTrips__cards'>
            <NextTripCard />
        </div>
    </div>
  );
};

export default NextTrips;