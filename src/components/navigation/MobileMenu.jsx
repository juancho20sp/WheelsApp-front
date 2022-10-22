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
      <ul>
        <li>
          <NavigationIcon icon={<IoHomeOutline className='test' />} text='text' />
        </li>
        <li>
          <FaRegUser />
        </li>
        <li>
          <IoRefreshOutline />
        </li>
        <li>
          <FiSettings />
        </li>
      </ul>
    </nav>
  );
};

export default MobileMenu;
