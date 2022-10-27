import React, { useState, useEffect } from 'react';

// SCSS colors
import colors from '../scss/utils/_variables.scss';

// Views
import { Layout } from '.';

// Components
import { Header, NextTrips, PassedTrips, FilledButton } from '../components';

// Hooks
import { useHeader, socket } from '../utils';

const HomeDriver = () => {
  const {
    ctaText,
    handleCtaClick
  } = useHeader();

  const [nextTrips, setNextTrips] = useState([1]);

  useEffect(() => {
    socket.on('newTrip', data => {
      setNextTrips([...nextTrips, data.data]);
    });

    return () => {
      socket.off();
    };
  }, [nextTrips]);

  return (
    <Layout>
      <main className='homeDriver homeDriver__container'>
        <Header text='Home Conductor' />

        <div className='homeDriver__content'>
          <NextTrips nextTrips={nextTrips} />
          <PassedTrips />

          <div className='homeDriver__change-view'>
            <FilledButton text={ctaText} color={colors?.lightPink} clickHandler={handleCtaClick} />
          </div>
          <FilledButton text={'Test realtime'} color={colors?.lightBlue} clickHandler={() => socket.emit('newTripAdded', `Holi ${new Date().getMilliseconds()}`)} />
        </div>
      </main>
    </Layout>
  );
};

export default HomeDriver;
