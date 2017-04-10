import React from 'react';
import { CircularProgress } from 'material-ui';

const Loading = () => (
  <div>
    <CircularProgress size={20} >
      Loading ...
    </CircularProgress>
  </div>
);

export default Loading;
