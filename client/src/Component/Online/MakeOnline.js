import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import io from 'socket.io-client';
import { connect } from 'react-redux';
import { GetOnline, newConnect } from '../../actions/friends';
let socket;
const MakeOnline = ({ user, GetOnline, newConnect, newconnect }) => {
  const ENDPOINT = 'localhost:5000';
  const [myOnline, setOnline] = useState([]);

  let i = 0;

  useEffect(() => {
    GetOnline();
  }, []);

  useEffect(() => {
    socket = io(ENDPOINT);
    let friendid = user.user;
    let room = user.chatid;
    socket.emit('Online', { friendid, room }, () => {});
  }, [ENDPOINT]);
  useEffect(() => {
    socket.on('online', (message) => {
      setOnline([...myOnline, message]);
    });
    newConnect([...newconnect, ...myOnline]);
  }, [myOnline, ENDPOINT]);
  console.log(newconnect);

  return <div></div>;
};

MakeOnline.propTypes = {
  GetOnline: PropTypes.func.isRequired,
  newConnect: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  newconnect: state.friends.newconnect,
  online: state.friends.online,
});
export default connect(mapStateToProps, { GetOnline, newConnect })(MakeOnline);
