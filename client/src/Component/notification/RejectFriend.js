import React from 'react';
import PropTypes from 'prop-types';
import { RejectRequest, RejectSendRequest } from '../../actions/friends';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMinus } from '@fortawesome/free-solid-svg-icons';

const RejectFriend = ({ id, RejectRequest, RejectSendRequest }) => {
  const RejectRequestfriend = async (e) => {
    await e.preventDefault();
    await RejectRequest(id);
    await RejectSendRequest(id);
  };

  return (
    <div>
      <Button
        className='acceptbuttton'
        onClick={(e) => RejectRequestfriend(e)}
        color='secondary'
      >
        <FontAwesomeIcon icon={faUserMinus} />
        Reject Request
      </Button>
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
