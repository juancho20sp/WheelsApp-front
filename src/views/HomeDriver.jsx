import React from 'react';

// Views
import { Layout } from '.';

// Components
import { Header, NextTrips, PassedTrips } from '../components';

const HomeDriver= () => {
  return ( 
    <Layout>
      <main className='homeDriver homeDriver__container'>
        <Header text='Home Conductor' />

        <div className='homeDriver__content'>
          <NextTrips />
          <PassedTrips />
        </div>
      </main>
    </Layout>
  );
};

export default HomeDriver;
