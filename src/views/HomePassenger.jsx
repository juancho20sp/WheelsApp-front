import React from 'react';

// Views
import { Layout } from './';

// Components
import { Header, NextTrips, PassedTrips } from '../components';

const HomePassenger = () => {
  return ( 
    <Layout>
      <main className='homePassenger homePassenger__container'>
        <Header text='Home Pasajero' />

        <div className='homePassenger__content'>
          <NextTrips />
          <PassedTrips />
        </div>
      </main>
    </Layout>
  );
};

export default HomePassenger;
