import React from 'react';

// Views
import { Layout } from '.';

// Components
import { Header, NextTrips, PassedTrips } from '../components';


const Record= () => {
  return ( 
    <Layout>
      <main className='record record__container'>
        <Header text='Historial' />

        <div className='record__content'>
          <PassedTrips />
        </div>
      </main>
    </Layout>
  );
};

export default Record;
