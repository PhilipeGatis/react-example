import React from 'react';
import { CircularProgress } from 'material-ui';

import './Loading.css';

const Loading = ({ center, size }) => (

  <div className={center ? 'loading-box' : null} >
    <CircularProgress
      size={size}
    >
      Loading ...
    </CircularProgress>
  </div>
);

Loading.propTypes = {
  center: React.PropTypes.bool.isRequired,
  size: React.PropTypes.number.isRequired,
};

export default Loading;
