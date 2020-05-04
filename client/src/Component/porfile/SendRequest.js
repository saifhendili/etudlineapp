import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { SSendRequest, FriendRequest } from '../../actions/friends';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'reactstrap';
const SendRequest = ({
  id,
  SSendRequest,
  FriendRequest,

  // friends: { sendrequest, friendrequest },
}) => {
  const [red, HandelMouseClick] = useState({ friend: false });
  const { friend } = red;

  const onsub = (e) => {
    e.preventDefault();
    SSendRequest(id);
    FriendRequest(id);
  };
  return (
    <Fragment>
      <Button onClick={(e) => onsub(e)} color='primary'>
        
        <FontAwesomeIcon icon={faUserPlus} /> Send Request
      </Button>
    </Fragment>
  );
};

SendRequest.propTypes = {
  SSendRequest: PropTypes.func.isRequired,
  FriendRequest: PropTypes.func.isRequired,
};

export default connect(null, {
  SSendRequest,
  FriendRequest,
})(SendRequest);
