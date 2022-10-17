import React from 'react';

const FilledButton = ({ text = '', color = '' }) => {
  return (
    <div className='filledButton filledButton__container'>
      <button style={{ '--button-background-color': color }} className='filledButton__button'>
        {text}
      </button>
    </div>
  );
};

export default FilledButton;
