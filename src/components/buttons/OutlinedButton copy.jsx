import React from 'react';

const OutlinedButton = ({ text = '', color = '' }) => {
  return (
    <div className='outlinedButton outlinedButton__container'>
      <button style={{ '--color': color }} className='outlinedButton__button'>
        {text}
      </button>
    </div>
  );
};

export default OutlinedButton;
