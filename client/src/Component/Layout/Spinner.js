import React, { Fragment } from 'react';
import spinner from '../../image/spinner.gif';

export default () => (
  <Fragment>
    <img
      src={spinner}
      style={{ width: '300px', margin: 'auto', display: 'block' }}
      alt='Loading...'
    />
  </Fragment>
);
