import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import GetYourMessages from './GetYourMessages';
import io from 'socket.io-client';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

let socket;
const Room = ({ location }) => {
  const [message, setMessage] = useState('');
  const ENDPOINT = 'localhost:5000';
  const { fname, lname, name, room, friendid } = queryString.parse(
    location.search
  );
  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit('join', { name, room }, () => {});
  }, [ENDPOINT, location.search]);

  const sendMessage = async (e) => {
    await e.preventDefault();
    if (message) {
      socket.emit('sendMessage', { message, name, room }, () => setMessage(''));
    }
  };

  return (
    <div className='ktiba'>
      <div className='namefriendmsgavail'>
        <h2>
          {fname} {lname}
        </h2>
      </div>
      <GetYourMessages friendid={friendid} myid={name} roomm={room} />
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


const mapStateToProps = (state) => ({
  messages: state.chat.messages,
});
export default connect(mapStateToProps, {})(Room);
