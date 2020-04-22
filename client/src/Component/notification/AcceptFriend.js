import React from 'react';
import PropTypes from 'prop-types';
import { Accept_Friends } from '../../actions/friends';
import { connect } from 'react-redux';

const AcceptFriend = ({ id, Accept_Friends }) => {
  const Accept = (e) => {
    e.preventDefault();
    Accept_Friends(id);
  };
  return (
    <div>
      <button onClick={(e) => Accept(e)}>Accept Request</button>
    </div>
  );
};

AcceptFriend.propTypes = {
  Accept_Friends: PropTypes.func.isRequired,
};

export default connect(null, { Accept_Friends })(AcceptFriend);
