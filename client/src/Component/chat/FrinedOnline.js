import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GetFriends } from '../../actions/friends';
import Getroomm from './Getroomm';
const Room = ({ GetFriends, friends: { friends } }) => {
  useEffect(() => {
    GetFriends();
  }, [GetFriends]);
  return (
    <div>
      {friends.map((el, i) => (
        <Getroomm
          key={i}
          myfriend={el}
          id={el.user}
          room={el.chatid}
          name={el.myuser}
        />
      ))}
    </div>
  );
};

Room.propTypes = {
  GetFriends: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  friends: state.friends,
  chat: state.chat,
});
export default connect(mapStateToProps, { GetFriends })(Room);
