import React from 'react';

// Components
import { slide as Menu } from 'react-burger-menu';
import { GiHamburgerMenu } from 'react-icons/gi';


const BurgerMenu = () => {
  return (
    <Menu
      customBurgerIcon={ <GiHamburgerMenu /> }
      className='burgerMenu burgerMenu__container'
      width={'300px'}
    >
      <h2>Titulo</h2>
      <a>Test 1</a>
      <a>Test 2</a>
      <a>Test 3</a>
      <a>Test 4</a>
    </Menu>
  );
};

export default BurgerMenu;
