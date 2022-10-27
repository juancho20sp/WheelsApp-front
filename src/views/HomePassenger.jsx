import React from 'react';

// SCSS colors
import colors from '../scss/utils/_variables.scss';

// Views
import { Layout } from './';

// Components
import { Header, NextTrips, PassedTrips, FilledButton } from '../components';

// Hooks
import { useHeader } from '../utils';

const HomePassenger = () => {
  const {
    ctaText,
    handleCtaClick
  } = useHeader();

  return (
    <Layout>
      <main className='homePassenger homePassenger__container'>
        <Header text='Home Pasajero' />

        <div className='homePassenger__content'>
          <NextTrips />
          <PassedTrips />
        </div>

        <div className='homePassenger__change-view'>
          <FilledButton text={ctaText} color={colors?.lightPink} clickHandler={handleCtaClick} />
        </div>

      </main>
    </Layout>
  );
};

export default HomePassenger;
