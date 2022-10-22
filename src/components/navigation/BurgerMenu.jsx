import React from 'react';

// Components
import { slide as Menu } from 'react-burger-menu';

import { GiHamburgerMenu } from 'react-icons/gi';
// GiHamburgerMenu

const BurgerMenu = () => {
  return (
    <Menu
      customBurgerIcon={<GiHamburgerMenu />}
      className='burgerMenu burgerMenu__container'
      width={'300px'}
    >
      <a>Test 1</a>
      <a>Test 2</a>
      <a>Test 3</a>
      <a>Test 4</a>
    </Menu>
  );
};

export default BurgerMenu;
