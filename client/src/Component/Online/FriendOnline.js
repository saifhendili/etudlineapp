import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ListFriendOnline from './ListFriendOnline';

function FriendOnline({ auth: { isAuthenticated, loading } }) {
  return (
    <div>
      {!loading && (
        <Fragment>
          {isAuthenticated ? (
            <div>
              {' '}
              <ListFriendOnline />{' '}
            </div>
          ) : null}
        </Fragment>
      )}
    </div>
  );
}

FriendOnline.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(FriendOnline);
