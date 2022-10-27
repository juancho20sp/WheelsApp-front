import React, { useEffect, useState } from 'react';

// SCSS colors
import colors from '../scss/utils/_variables.scss';

// Views
import { Layout } from './';

// Components
import { Header, NextTrips, PassedTrips, FilledButton } from '../components';

// Hooks
import { useHeader, socket } from '../utils';

const HomePassenger = () => {
  const {
    ctaText,
    handleCtaClick
  } = useHeader();

  const [nextTrips, setNextTrips] = useState([1]);

  useEffect(() => {
    socket.on('newTrip', data => {
      console.log(data.data);

      setNextTrips([...nextTrips, data.data]);
    });

    return () => {
      socket.off();
    };
  }, [nextTrips]);

  return (
    <Layout>
      <main className='homePassenger homePassenger__container'>
        <Header text='Home Pasajero' />

        <div className='homePassenger__content'>
          <NextTrips nextTrips={nextTrips} />
          <PassedTrips />

          <div className='homePassenger__change-view'>
            <FilledButton text={ctaText} color={colors?.lightPink} clickHandler={handleCtaClick} />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default HomePassenger;
