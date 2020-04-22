import React from 'react';
import PropTypes from 'prop-types';
import { RejectRequest, RejectSendRequest } from '../../actions/friends';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
const RejectFriend = ({ id, RejectRequest, RejectSendRequest }) => {
  const RejectRequestfriend = (e) => {
    e.preventDefault();
    RejectRequest(id);
    RejectSendRequest(id);
  };

  return (
    <div>
      <button onClick={(e) => RejectRequestfriend(e)}>Reject Request</button>
    </div>
  );
};

RejectFriend.propTypes = {
  RejectRequest: PropTypes.func.isRequired,
  RejectSendRequest: PropTypes.func.isRequired,
};

export default connect(null, { RejectRequest, RejectSendRequest })(
  RejectFriend
);
