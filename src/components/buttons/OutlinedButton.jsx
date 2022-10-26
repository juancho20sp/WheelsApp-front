import React from 'react';

const OutlinedButton = ({ text = '', color = '', clickHandler = '' }) => {
  return (
    <div className='outlinedButton outlinedButton__container'>
      <button style={{ '--color': color }} className='outlinedButton__button' onClick={(event) => clickHandler ? clickHandler(event) : ''}>
        {text}
      </button>
    </div>
  );
};

export default OutlinedButton;
