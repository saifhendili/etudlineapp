import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Accept_Friends, GetFriends } from '../../actions/friends';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'reactstrap';

const AcceptFriend = ({ id, Accept_Friends, GetFriends }) => {
  const Accept = async (e) => {
    await e.preventDefault();
    await Accept_Friends(id);
    await GetFriends();
  };
  return (
    <Button color='success' className="acceptbuttton" onClick={(e) => Accept(e)}><FontAwesomeIcon icon={faUserPlus} />
      Accept Request
    </Button>
  );
};

AcceptFriend.propTypes = {
  Accept_Friends: PropTypes.func.isRequired,
  GetFriends: PropTypes.object.isRequired,
};

export default connect(null, { Accept_Friends, GetFriends })(AcceptFriend);
