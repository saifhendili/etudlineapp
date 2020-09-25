import React from 'react';
import PropTypes from 'prop-types';
import { Getroom, GetMessages } from '../../actions/chat';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
const Aff = ({ el, id, Getroom, GetMessages }) => {
  const getroom = async (e) => {
    await e.preventDefault();
    await Getroom(id);
    await GetMessages(id);
  };

  return (
    <div>
      <li className='makeOnline' onClick={(e) => getroom(e)}>
        <Link
          to={`/chat?fname=${el.firstname}&&lname=${el.lastname}&&name=${el.myuser}&room=${el.chatid}&friendid=${el.user}`}
        >
          {el.firstname} {el.lastname}
        </Link>
      </li>
    
    </div>
  );
};

Aff.propTypes = {
  Getroom: PropTypes.func.isRequired,
  GetMessages: PropTypes.func.isRequired,
};

export default connect(null, { Getroom, GetMessages })(Aff);
