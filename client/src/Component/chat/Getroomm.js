import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Getroom } from '../../actions/chat';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Getroomm = ({ myfriend, id, room, name, Getroom }) => {
  const getroom = async (e) => {
    await e.preventDefault();
    await Getroom(id);
  };

  return (
    <div>
      <div onClick={(e) => getroom(e)}>
        <Link
          to={`/chat?fname=${myfriend.firstname}&&lname=${myfriend.lastname}&&name=${name}&room=${room}&friendid=${myfriend.user}`}
        >
          <h1>
            {myfriend.firstname} {myfriend.lastname}
          </h1>
        </Link>{' '}
      </div>
    </div>
  );
};

Getroomm.propTypes = {
  Getroom: PropTypes.func.isRequired,
};

export default connect(null, { Getroom })(Getroomm);
