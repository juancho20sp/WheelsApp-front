import React from 'react';

// Components
import { slide as Menu } from 'react-burger-menu';
import { GiHamburgerMenu } from 'react-icons/gi';

// Hooks
import { useLogin } from '../../utils';

const BurgerMenu = () => {
  const { logoutUser: logout } = useLogin();
  
  const handleLogout = (event) => {
    event.preventDefault();
    logout();
  };

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
      <a onClick={(e) => handleLogout(e)}>Cerrar sesión</a>

    </Menu>
  );
};

export default BurgerMenu;
