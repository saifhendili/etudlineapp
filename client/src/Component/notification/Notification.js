import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import {
  GetSendreq,
  getreqfriend,
  RejectRequest,
  RejectSendRequest,
} from '../../actions/friends';
import RejectFriend from './RejectFriend';
import { connect } from 'react-redux';
import AcceptFriend from './AcceptFriend'

const Notification = ({
  GetSendreq,
  getreqfriend,
  id,
  RejectRequest,
  RejectSendRequest,
  friends: { sendrequest, friendrequest },
  profile = { profile },
}) => {
  useEffect(() => {
    GetSendreq(id);
    getreqfriend(id);
  }, [GetSendreq, getreqfriend]);

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
              {friendrequest.map((el, i) => (
                <ul className='friendreqqq2'>
                  <div className='friendreqqq'>
                    <li>
                      <img src={el.avatar} className='avatarnotif' />
                    </li>
                    <li className='firstnamefriendreq'>{el.firstname}</li>
                    <li className='firstnamefriendreq'>{el.lastname}</li>
                  </div>
                  <div className='buttfredreq'>
                    <li>
                    {el.firstname == '' ? (
                        <Fragment></Fragment>
                      ) : (
                        <AcceptFriend id={el.user} />
                      )}
                    </li>
                    <li>
                      {el.firstname == '' ? (
                        <Fragment></Fragment>
                      ) : (
                        <RejectFriend id={el.user} />
                      )}
                    </li>
                  </div>
                </ul>
              ))}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

Notification.propTypes = {
  GetSendreq: PropTypes.func.isRequired,
  getreqfriend: PropTypes.func.isRequired,
  RejectRequest: PropTypes.func.isRequired,
  RejectSendRequest: PropTypes.func.isRequired,
};
const mapStateTpProps = (state) => ({
  friends: state.friends,
  profile: state.profile,
});

export default connect(mapStateTpProps, {
  GetSendreq,
  getreqfriend,
  RejectRequest,
  RejectSendRequest,
})(Notification);
