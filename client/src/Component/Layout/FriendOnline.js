import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function FriendOnline({
  auth: { isAuthenticated, loading },
  profile: { profile },
}) {
  const authLinks = (
    <div className='onlinefriend'>
      <h1>friends</h1>
    </div>
  );

  return (
    <div className='mynavvbar'>
      {!loading && <Fragment>{isAuthenticated ? authLinks : null}</Fragment>}
    </div>
  );
}

FriendOnline.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, {})(FriendOnline);
