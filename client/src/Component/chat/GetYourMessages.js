import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { GetMessages } from '../../actions/chat';
import { connect } from 'react-redux';
import ScrollToBottom from 'react-scroll-to-bottom';
import ReactEmoji from 'react-emoji';
const GetYourMessages = ({
  chat: { messages, room },
  mymessages,
  friendid,
  myid,
  roomm,
  GetMessages,
  newconnect,
}) => {
  // useEffect(() => {
  //   GetMessages(friendid);
  // }, [GetMessages]);
  // console.log(roomm);
  return (
    <div className='container-messages'>
      <ScrollToBottom className={'ROOT_CSS'}>
        {messages.map((el, i) =>
          myid == el.myid ? (
            <div className='message-container myusemessgr'>
              <img className='avatarmessages' src={el.avatar} />
              <p className={``}>{ReactEmoji.emojify(el.text)}</p>
            </div>
          ) : (
            <div className='message-container msgmyfriend'>
              <img className='avatarmessages' src={el.avatar} />
              <p className={``}>{ReactEmoji.emojify(el.text)}</p>
            </div>
          )
        )}
        {/* && el.room == roomm/ */}
        {newconnect.map((el, i) =>
          el.room !== roomm ? null : myid == el.myid ? (
            <div className='message-container myusemessgr'>
              {/* <h1>{room.chatid}</h1> */}
              <img className='avatarmessages' src={el.avatar} />
              <p className={``}>{ReactEmoji.emojify(el.text)}</p>
            </div>
          ) : (
            <div className='message-container msgmyfriend'>
              <img className='avatarmessages' src={el.avatar} />
              <p className={``}>{ReactEmoji.emojify(el.text)}</p>
            </div>
          )
        )}
      </ScrollToBottom>
    </div>
  );
};

GetYourMessages.propTypes = {
  GetMessages: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  chat: state.chat,
  newconnect: state.friends.newconnect,
});
export default connect(mapStateToProps, { GetMessages })(GetYourMessages);
