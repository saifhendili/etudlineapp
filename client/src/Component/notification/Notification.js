import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import { Getreqfriendnotif, GetFriends } from '../../actions/friends';
import RejectFriend from './RejectFriend';
import { connect } from 'react-redux';
import AcceptFriend from './AcceptFriend';

const Notification = ({
  GetFriends,
  Getreqfriendnotif,
  id,
  friends: { friendreqnotif },
  auth: { user },
}) => {
  useEffect(() => {
    Getreqfriendnotif(id);
    GetFriends();
  }, [Getreqfriendnotif, GetFriends]);

  return (
    <div className=''>
      <ul className=''>
        <li className='notif'>
          {' '}
          <FontAwesomeIcon
            className='faEnvelopeOpenText'
            icon={faEnvelopeOpenText}
          />
          <ul className='dropdown'>
            <li>
              {friendreqnotif.map((el, i) =>
                el.myuser === user._id ? (
                  <Fragment>
                    <ul key={i} className='friendreqqq2'>
                      <div className='friendreqqq'>
                        <li>
                          <img src={el.avatar} className='avatarnotif' />
                        </li>
                        <li className='firstnamefriendreq'>{el.firstname}</li>
                        <li className='firstnamefriendreq'>{el.lastname}</li>
                      </div>
                      <div className='buttfredreq'>
                        <li>
                          {el.firstname == '' ? null : (
                            <AcceptFriend id={el.user} />
                          )}
                        </li>
                        <li>
                          {el.firstname == '' ? null : (
                            <RejectFriend id={el.user} />
                          )}
                        </li>
                      </div>
                    </ul>
                  </Fragment>
                ) : null
              )}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

Notification.propTypes = {
  Getreqfriendnotif: PropTypes.func.isRequired,
  GetFriends: PropTypes.func.isRequired,
};
const mapStateTpProps = (state) => ({
  friends: state.friends,
  auth: state.auth,
});

export default connect(mapStateTpProps, {
  Getreqfriendnotif,
  GetFriends,
})(Notification);
