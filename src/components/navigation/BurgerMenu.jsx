import React from 'react';

// Components
import { slide as Menu } from 'react-burger-menu';
import { GiHamburgerMenu } from 'react-icons/gi';

// Hooks
import { UserRoutes } from '../../utils';
import { useNavigate } from 'react-router-dom';

// Redux
import { useSelector } from 'react-redux';

const BurgerMenu = () => {
  const navigate = useNavigate();
  const currentRole = useSelector((state) => state.login.currentRole);

  const handleNavItemClick = (route) => {
    navigate(route);
  };

  return (
    <Menu
      customBurgerIcon={ <GiHamburgerMenu /> }
      className='burgerMenu burgerMenu__container'
      width={'300px'}
    >
      <h2>Home {currentRole === 'DRIVER' ? 'Conductor' : 'Pasajero'}</h2>
      <a onClick={() => handleNavItemClick(UserRoutes.home.path)}>Home</a>
      <a onClick={() => handleNavItemClick(UserRoutes.profile.path)}>Perfil</a>
      <a onClick={() => handleNavItemClick(UserRoutes.historial.path)}>Historial</a>
      {/* <a onClick={() => handleNavItemClick(UserRoutes.settings.path)}>Settings</a> */}

    </Menu>
  );
};

export default BurgerMenu;
