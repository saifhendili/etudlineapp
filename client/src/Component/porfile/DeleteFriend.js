import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DeleteFriends } from '../../actions/friends';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMinus } from '@fortawesome/free-solid-svg-icons';

const DeleteFriend = ({ id, DeleteFriends }) => {
  const Delete = (e) => {
    e.preventDefault();
    DeleteFriends(id);
  };
  return (
    <div>
      <Button className='delteboutt' onClick={(e) => Delete(e)} color='danger'>
        <FontAwesomeIcon icon={faUserMinus} />
        Delete Friend
      </Button>
    </div>
  );
};

DeleteFriend.propTypes = {
  DeleteFriends: PropTypes.func.isRequired,
};

export default connect(null, { DeleteFriends })(DeleteFriend);
