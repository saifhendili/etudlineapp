import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { SSendRequest, FriendRequest } from '../../actions/friends';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

const SendRequest = ({
  id,
  SSendRequest,
  FriendRequest,

  // friends: { sendrequest, friendrequest },
}) => {
  const [red, HandelMouseClick] = useState({ friend: false });
  const { friend } = red;
  // const SetItem = () => {
  //   HandelMouseClick({ ...red, friend: !friend });
  // };
  const onsub = (e) => {
    e.preventDefault();
    SSendRequest(id);
    FriendRequest(id);
    // window.location.reload(false);
    // SetItem();
  };

  // if (friend) {
  // }
  return (
    <Fragment>
      {/* {sentRequests.user === id ? (
        <button>Delete Request</button>
      ) : ( */}
      <Link to={`/profiles/${id}`}>
        {' '}
        <button onClick={(e) => onsub(e)}>Send Request</button>
      </Link>
      {/* )} */}
    </Fragment>
  );
};

SendRequest.propTypes = {
  SSendRequest: PropTypes.func.isRequired,
  FriendRequest: PropTypes.func.isRequired,
};
// const mapStateToProps = (state) => ({
//   friends: state.friends,
// });
export default connect(null, {
  SSendRequest,
  FriendRequest,
})(SendRequest);
