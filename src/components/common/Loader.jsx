import React from 'react';

// SCSS colors
import colors from '../../scss/utils/_variables.scss';

// Components
import BounceLoader from 'react-spinners/BounceLoader';

const Loader = () => {
  return (
    <div className='loader loader__container'>
      <BounceLoader color={colors?.darkMustard} size={150} />
    </div>
  );
};

export default Loader;