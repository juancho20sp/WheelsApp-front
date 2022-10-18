import React from 'react';

// Components
import { Navbar } from '../components';

const Layout = ({ children }) => {
  // AQUI TIENE QUE IR LA FUNCIÓN QUE HAGA EL TOGGLE DEL NAV EN DESKTOP
  return (
    <div className='layout layout__container'>
      {children}
      <Navbar />
    </div>
  );
};

export default Layout;
