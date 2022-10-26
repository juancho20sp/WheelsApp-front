import React from 'react';

const FilledButton = ({ text = '', color = '', clickHandler = '' }) => {
  return (
    <div className='filledButton filledButton__container'>
      <button style={{ '--button-background-color': color }} className='filledButton__button' onClick={(event) => clickHandler ? clickHandler(event) : ''}>
        {text}
      </button>
    </div>
  );
};

export default FilledButton;
