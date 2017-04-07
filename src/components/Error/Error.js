import React from 'react';

const Error = ({error}) => (
  <div>
    <p>Error :( ...</p>
    <p>{error}</p>
  </div>
)

Error.propTypes = {
  error: React.PropTypes.string.isRequired,
};

export default Error;
