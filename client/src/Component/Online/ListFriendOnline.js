import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { GetFriends } from '../../actions/friends';
import MakeOnline from './MakeOnline';
import AfficherOnline from './AfficherOnline';

function FriendOnline({
  //   profile: { profile },
  GetFriends,
  friends: { friends },
}) {
  useEffect(() => {
    GetFriends();
  }, []);
  return (
    <div className='boxONline'>
      <div className='onlinefriend'>
        {friends.map((el, i) => (
          <MakeOnline key={el._id} user={el} />
        ))}
        <h1>Online Friends</h1>
        <ul>
          <li>
            <AfficherOnline />
          </li>
        </ul>
      </div>
    </div>
  );
}

FriendOnline.propTypes = {
  GetFriends: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  friends: state.friends,
});

export default connect(mapStateToProps, { GetFriends })(FriendOnline);
