import React from 'react';

// Components
import { Navigation } from '../components';

const Layout = ({ children }) => {
  // AQUI TIENE QUE IR LA FUNCIÓN QUE HAGA EL TOGGLE DEL NAV EN DESKTOP
  return (
    <div className='layout layout__container'>
      {children}
      <Navigation />
    </div>
  );
};

export default Layout;
