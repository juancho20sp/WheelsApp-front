import React from 'react';

// Components
import { BurgerMenu, MobileMenu } from '..';

const Navigation = () => {
  return (
    <nav className='navigation navigation__container'>
      <BurgerMenu />
      <MobileMenu />
    </nav>
  );
};

export default Navigation;
