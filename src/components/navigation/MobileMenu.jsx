import React from 'react';

// Components
import { NavigationIcon } from '../';

// Hooks
import { UserRoutes } from '../../utils';
import { useNavigate } from 'react-router-dom';

// Icons
import { IoHomeOutline, IoRefreshOutline } from 'react-icons/io5';
import { FaRegUser } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';

const MobileMenu = () => {
  const navigate = useNavigate();

  const handleNavItemClick = (route) => {
    navigate(route);
  };

  return (
    <nav className='mobileMenu mobileMenu__container'>
      <ul className='mobileMenu__list'>
        <li onClick={() => handleNavItemClick(UserRoutes.home.path)}>
          <NavigationIcon icon={<IoHomeOutline className='mobileMenu__icon' />} text='Home' />
        </li>
        <li onClick={() => handleNavItemClick(UserRoutes.profile.path)}>
          <NavigationIcon icon={<FaRegUser className='mobileMenu__icon mobileMenu__icon--user' />} text='Perfil' />
        </li>
        <li onClick={() => handleNavItemClick(UserRoutes.record.path)}>
          <NavigationIcon icon={<IoRefreshOutline className='mobileMenu__icon' />} text='Historial' />
        </li>
        {/* <li onClick={() => handleNavItemClick(UserRoutes.settings.path)}>
          <NavigationIcon icon={<FiSettings className='mobileMenu__icon' />} text='Settings' />
        </li> */}
      </ul>
    </nav>
  );
};

export default MobileMenu;
