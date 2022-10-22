import React from 'react';

// Components
import { BurgerMenu, MobileMenu } from '..';

const Navigation = () => {
  return (
    <div className='navigation navigation__container'>
      <BurgerMenu />
      <MobileMenu />
    </div>
  );
};

export default Navigation;
