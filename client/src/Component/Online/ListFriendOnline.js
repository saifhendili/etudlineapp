import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { GetFriends } from '../../actions/friends';
import MakeOnline from './MakeOnline';
import AfficherOnline from './AfficherOnline';
import GetNewMessages from '../chat/GetNewMessages';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons';
import AllFrinedContact from './AllFrinedContact';
function FriendOnline({ GetFriends, friends: { friends } }) {
  const [displaySocialInputs, toggleSocialInputs] = useState(false);
  useEffect(() => {
    GetFriends();
  }, []);
  return (
    <Fragment>
      <div onClick={() => toggleSocialInputs(!displaySocialInputs)}>
        {!displaySocialInputs ? (
          <div className='contactlist linknav'>
            <FontAwesomeIcon className='faToggleOff' icon={faToggleOff} />
            <h6 className='contactttt'>Contact list</h6>
          </div>
        ) : (
          <div className='contactlist linknav'>
            <FontAwesomeIcon className='faToggleOn' icon={faToggleOn} />
            <h6>Contact list</h6>
          </div>
        )}
      </div>
      {displaySocialInputs && (
        <Fragment>
          <div className='boxONline'>
            <div className='onlinefriend'>
              {friends.map((el, i) => (
                <Fragment>
                  <MakeOnline key={el._id} user={el} />
                  <GetNewMessages key={i} user={el} />
                </Fragment>
              ))}
              <h3 className='friendonlinetext'>Online Friends</h3>
              <ul>
                <li>
                  <AfficherOnline />
                </li>
                <li>all friends</li>
                <li>
                  {friends.map((el) =>
                    !el.firstname ? null : (
                      <AllFrinedContact key={el._id} el={el} id={el.user} />
                    )
                  )}
                </li>
              </ul>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
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
