import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { GetMessages } from '../../actions/chat';
import { connect } from 'react-redux';
import ScrollToBottom from 'react-scroll-to-bottom';
import ReactEmoji from 'react-emoji';
const GetYourMessages = ({
  friendid,
  GetMessages,
  chat: { messages },
  messagess,

  myid,
}) => {
  useEffect(() => {
    GetMessages(friendid);
  }, [GetMessages]);

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
        {messagess.map((el, i) =>
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
      </ScrollToBottom>
    </div>
  );
};

GetYourMessages.propTypes = {
  GetMessages: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  chat: state.chat,

});
export default connect(mapStateToProps, { GetMessages })(GetYourMessages);
