import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import GetYourMessages from './GetYourMessages';
import io from 'socket.io-client';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

let socket;
const Room = ({ location }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const ENDPOINT = 'localhost:5000';
  const { fname, lname, name, room, friendid } = queryString.parse(
    location.search
  );

  useEffect(() => {
    // const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    socket.emit('join', { name, room }, () => {});
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);
  const sendMessage = async (e) => {
    await e.preventDefault();
    // const { name, room } = await queryString.parse(location.search);

    if (message) {
      socket.emit('sendMessage', { message, name, room }, () => setMessage(''));
    }
  };
  console.log(messages);
  return (
    <div className='ktiba'>
      <div className='namefriendmsgavail'>
        <h2>
          {fname} {lname}
        </h2>
      </div>
      <GetYourMessages friendid={friendid} messagess={messages} myid={name} />
      <div className='inputsendcontainer'>
        <input
          type='text'
          value={message}
          className='inputsendmessage'
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => (e.key === 'Enter' ? sendMessage(e) : null)}
        />
        <FontAwesomeIcon icon={faPaperPlane} className='faPaperPlane' />
      </div>
    </div>
  );
};

Room.propTypes = {};
const mapStateToProps = (state) => ({
  chat: state.chat,
});
export default connect(mapStateToProps, {})(Room);
