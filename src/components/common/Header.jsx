import React from 'react';

// CSS Colors
import colors from '../../scss/utils/_variables.scss';

const Header = ({text = ''}) => {
  return (
    <header className='header header__container'>
      <h1 className='header__title' style={{'--border-color': colors?.darkMustard}}>{text}</h1>
    </header>
  );
};

export default Header;