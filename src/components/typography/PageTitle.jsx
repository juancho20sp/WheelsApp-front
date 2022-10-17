import React from 'react';

const PageTitle = ({ title, borderColor }) => {
  return (
    <div className='pageTitle pageTitle__container'>
      <h1 className='pageTitle__title' style={{ '--border-color': borderColor }}>
        {title}
      </h1>
    </div>
  );
};

export default PageTitle;
