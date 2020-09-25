import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import ScrollToBottom from 'react-scroll-to-bottom';
import ReactEmoji from 'react-emoji';
const GetYourMessages = ({ messages, myid, roomm, mynewmessage }) => {
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
        {mynewmessage.map((el, i) =>
          el.room !== roomm ? null : myid == el.myid ? (
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
      </ScrollToBottom>
    </div>
  );
};

const mapStateToProps = (state) => ({
  messages: state.chat.messages,
  mynewmessage: state.chat.mynewmessage,
});
export default connect(mapStateToProps, {})(GetYourMessages);
