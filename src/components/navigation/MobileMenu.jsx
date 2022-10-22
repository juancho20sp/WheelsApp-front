import React from 'react';

// Components
import { NavigationIcon } from '../';

// Icons
import { IoHomeOutline, IoRefreshOutline } from 'react-icons/io5';
import { FaRegUser } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';

const MobileMenu = () => {
  return (
    <nav className='mobileMenu mobileMenu__container'>
      <ul className='mobileMenu__list'>
        <li>
          <NavigationIcon icon={<IoHomeOutline className='mobileMenu__icon' />} text='Home' />
        </li>
        <li>
          <NavigationIcon icon={<FaRegUser className='mobileMenu__icon mobileMenu__icon--user' />} text='Perfil' />
        </li>
        <li>
          <NavigationIcon icon={<IoRefreshOutline className='mobileMenu__icon' />} text='Historial' />
        </li>
        <li>
          <NavigationIcon icon={<FiSettings className='mobileMenu__icon' />} text='Settings' />
        </li>
      </ul>
    </nav>
  );
};

export default MobileMenu;
