import React, { useState } from 'react';

// CSS Colors
import colors from '../../scss/utils/_variables.scss';

// Hooks
import { useHeader } from '../../utils';

const Header = ({ text = '' }) => {
  const {
    showCta,
    ctaText,
    handleCtaClick
  } = useHeader();

  return (
    <header className='header header__container'>
      <h1 className='header__title' style={{ '--border-color': colors?.darkMustard }}>{text}</h1>
      {showCta && <p className='header__cta' onClick={() => handleCtaClick()}>{ctaText}</p>}
    </header>
  );
};

export default Header;