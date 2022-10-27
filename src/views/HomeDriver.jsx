import React from 'react';

// SCSS colors
import colors from '../scss/utils/_variables.scss';

// Views
import { Layout } from '.';

// Components
import { Header, NextTrips, PassedTrips, FilledButton } from '../components';

// Hooks
import { useHeader } from '../utils';

const HomeDriver= () => {
  const {
    ctaText,
    handleCtaClick
  } = useHeader();

  return ( 
    <Layout>
      <main className='homeDriver homeDriver__container'>
        <Header text='Home Conductor' />

        <div className='homeDriver__content'>
          <NextTrips />
          <PassedTrips />
        </div>

        <div className='homeDriver__change-view'>
          <FilledButton text={ctaText} color={colors?.lightPink} clickHandler={handleCtaClick} />
        </div>

      </main>
    </Layout>
  );
};

export default HomeDriver;
