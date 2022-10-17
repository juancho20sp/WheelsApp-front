import React from 'react';

const FormField = ({ label = '', helper = '', type = 'text', children }) => {
  return (
    <div className='formField formField__container'>
      <label className='formField__label' htmlFor={label}>
        {label}
      </label>
      {helper && <p className='formField__helper'>{helper}</p>}

      {/* If the input type is not a text-ish HTML element */}
      {/* we should pass it as children */}
      {children ? (
        <div className='formField__children'>{children}</div>
      ) : (
        <input className='formField__input' type={type} name={label} id={label} />
      )}
    </div>
  );
};

export default FormField;
