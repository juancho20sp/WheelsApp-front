import React from 'react';

const NavigationIcon = ({ icon = '', text = '' }) => {
  return (
    <div className='navigationIcon navigationIcon__container'>
      {icon}
      <p className='navigationIcon__text'>{text}</p>
    </div>
  );
};

export default NavigationIcon;
