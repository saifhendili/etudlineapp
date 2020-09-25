import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GetOnline } from '../../actions/friends';
import Aff from './Aff';
const AfficherOnline = ({ GetOnline, online, newconnect }) => {
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
        el.isOnline ? <Aff el={el} id={el.user} /> : null
      )}
    </div>
  );
};

AfficherOnline.propTypes = {
  GetOnline: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  online: state.friends.online,
  newconnect: state.friends.newconnect,
});
export default connect(mapStateToProps, { GetOnline })(AfficherOnline);
