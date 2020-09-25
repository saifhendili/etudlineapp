import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import io from 'socket.io-client';
import { connect } from 'react-redux';
import { newMessages } from '../../actions/chat';

let socket;

const GetNewMessages = ({
  user,
  newMessages,
  mynewmessage,
}) => {
  const ENDPOINT = 'localhost:5000';
  const [messages, setMessages] = useState([]);

  let i = 0;

  useEffect(() => {
    socket = io(ENDPOINT);
    let name = user.user;
    let room = user.chatid;
    socket.emit('join', { name, room }, () => {});
  }, [ENDPOINT]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message]);
    });
    newMessages([...mynewmessage, ...messages]);
  }, [messages, ENDPOINT]);
  console.log(mynewmessage);

  return <div></div>;
};

GetNewMessages.propTypes = {
  newMessages: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  online: state.friends.online,
  mynewmessage: state.chat.mynewmessage,
});
export default connect(mapStateToProps, { newMessages })(GetNewMessages);
