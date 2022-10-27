import React from 'react';

// Components
import { NextTripCard } from '../';

const NextTrips = ({nextTrips = []}) => {
  return (
    <div className='nextTrips nextTrips__container'>
        <p className='nextTrips__title'>Próximos Viajes</p>
        <p className='nextTrips__date'>Noviembre 15 de 2022</p>

        <div className='nextTrips__cards'>
            {nextTrips.map((nextTrip, idx) => <NextTripCard key={idx} />)}
        </div>
    </div>
  );
};

export default NextTrips;