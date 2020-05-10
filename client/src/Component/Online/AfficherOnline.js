import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GetOnline } from '../../actions/friends';
import { Getroom } from '../../actions/chat';
import { Link } from 'react-router-dom';
import Aff from './Aff';
const AfficherOnline = ({ GetOnline, online, newconnect, Getroom }) => {
  useEffect(() => {
    GetOnline();
  }, [GetOnline]);

  return (
    <div>
      {online.map((el, i) =>
        newconnect.map((er, i) =>
          er.user == el.user ? (el.isOnline = er.isOnline) : null
        )
      )}

      {/* <Link
                to={`/chat?fname=${el.firstname}&&lname=${el.lastname}&&name=${el.myuser}&room=${el.room}&friendid=${el.user}`}
              >
                {el.firstname} {el.lastname}
              </Link>{' '} */}
      {online.map((el) => (el.isOnline ? <Aff el={el} id={el.user} /> : null))}
      {newconnect.map((el, i) =>
        !el.isOnline
          ? newconnect.map((er) =>
              el.user === er.user ? (er.isOnline = false) : null
            )
          : null
      )}

      {online.map((word, i) =>
        newconnect.map((el, i) =>
          el.user == word.user ? newconnect.splice(i, 1) : null
        )
      )}
      {newconnect.map((el, i) =>
        el.isOnline ? (
          <li className='makeOnline'>
            <Aff el={el} id={el.user} />
          </li>
        ) : null
      )}
    </div>
  );
};

AfficherOnline.propTypes = {
  GetOnline: PropTypes.func.isRequired,
  Getroom: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  online: state.friends.online,
  newconnect: state.friends.newconnect,
});
export default connect(mapStateToProps, { GetOnline, Getroom })(AfficherOnline);
