import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import Educationbox from './Education';
import { connect } from 'react-redux';
import Experienceboc from '../porfile/Experience';
import SendRequest from './SendRequest';
import DeleteFriend from './DeleteFriend';
import AcceptFriend from '../notification/AcceptFriend';

import RejectFriend from '../notification/RejectFriend';
import Deletereq from './Deletereq';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserPlus,
  faFacebookSquare,
  faLinkedin,
  faYoutubeSquare,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import Spinner from '../Layout/Spinner';
import img from '../../image/univer.jpg';
import { GetSendreq, getreqfriend, GetFriends } from '../../actions/friends';
import { getProfileById } from '../../actions/profile';

const PrifilePeople = ({
  getProfileById,
  GetSendreq,
  getreqfriend,
  profile: { profile, loading },
  auth: { user },
  match,
  GetFriends,
  friends: { sendrequest, friendrequest, friends, friendreqnotif },
}) => {
  const nullProfile = !profile;
  let bool = false;
  let friendss = false;
  let sendfr = false;
  useEffect(() => {
    GetFriends();
    getProfileById(match.params.id);
    GetSendreq(match.params.id);
    getreqfriend(match.params.id);
  }, [getProfileById, GetSendreq, getreqfriend, GetFriends]);

  return (
    <Fragment>
      {profile === null || loading ? (
        <Fragment>
          <Spinner />
        </Fragment>
      ) : (
        <Fragment>
          {user._id === match.params.id ? (
            <Redirect to='/profile' />
          ) : (
            <Fragment>
              <header className='header '>
                <img className='back-prof' src={img} />

                <section className='myProfile'>
                  <section className='header-row'>
                    <Educationbox />
                    <div className='pdpandname'>
                      <img
                        className='photo-de-profile'
                        src={profile.user.avatar}
                        alt
                        logo
                      />
                      <h3 className='myname'>
                        {profile.user.firstname} {profile.user.lastname}
                      </h3>

                      {/* <h1>{_id}</h1> */}
                      {/* <Fragment> */}
                      <Fragment>
                        {friendreqnotif.map((el, i) => (
                          <div>
                            {user._id == el.myuser ? (
                              (sendfr = true)
                            ) : (
                              <Fragment></Fragment>
                            )}
                          </div>
                        ))}
                        {friends.map((friend, i) => (
                          <div>
                            {friend.user == match.params.id ? (
                              (friendss = true)
                            ) : (
                              <Fragment></Fragment>
                            )}
                          </div>
                        ))}
                        =
                        {sendrequest.map((el, i) => (
                          <div>
                            {el.user.includes(match.params.id) ? (
                              (bool = true)
                            ) : (
                              <Fragment></Fragment>
                            )}
                          </div>
                        ))}
                        {friendss ? (
                          <DeleteFriend id={match.params.id} />
                        ) : sendfr ? (
                          <div className='buttfredreq'>
                            <AcceptFriend id={match.params.id} />

                            <RejectFriend id={match.params.id} />
                          </div>
                        ) : bool == false ? (
                          <div className='buttpeoplprof'>
                            <SendRequest id={match.params.id} />
                          </div>
                        ) : (
                          <Deletereq id={match.params.id} />
                        )}
                      </Fragment>

                      {!profile.social ? (
                        <Fragment></Fragment>
                      ) : (
                        <section className='social-profile'>
                          {profile.social.facebook ? (
                            <a href={profile.social.facebook}>
                              {' '}
                              <FontAwesomeIcon
                                className='faFacebook space-social '
                                icon={faFacebookSquare}
                              />
                            </a>
                          ) : (
                            <Fragment></Fragment>
                          )}
                          {profile.social.twitter ? (
                            <a href={profile.social.twitter}>
                              {' '}
                              <FontAwesomeIcon
                                className='faTwitter space-social '
                                icon={faTwitter}
                              />
                            </a>
                          ) : (
                            <Fragment></Fragment>
                          )}
                          {profile.social.youtube ? (
                            <a href={profile.social.youtube}>
                              {' '}
                              <FontAwesomeIcon
                                className='faYoutube space-social '
                                icon={faYoutubeSquare}
                              />
                            </a>
                          ) : (
                            <Fragment></Fragment>
                          )}

                          {profile.social.linkedin ? (
                            <a href={profile.social.linkedin}>
                              {' '}
                              <FontAwesomeIcon
                                className='faLinkdin space-social '
                                icon={faLinkedin}
                              />
                            </a>
                          ) : (
                            <Fragment></Fragment>
                          )}
                          {profile.social.instagram ? (
                            <a href={profile.social.instagram}>
                              {' '}
                              <FontAwesomeIcon
                                className='faInstagram'
                                icon={faInstagram}
                              />
                            </a>
                          ) : (
                            <Fragment></Fragment>
                          )}
                        </section>
                      )}
                      {/* <span className='positin-button-action-profile'>
                    <DashboardActions />
                  </span> */}
                    </div>
                    <Experienceboc />
                  </section>
                </section>
              </header>
              <main></main>
            </Fragment>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

PrifilePeople.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  GetSendreq: PropTypes.func.isRequired,
  getreqfriend: PropTypes.func.isRequired,
  friends: PropTypes.object.isRequired,
  // sentRequests: PropTypes.object.isRequired,

  GetFriends: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
  friends: state.friends,
});

export default connect(mapStateToProps, {
  getProfileById,
  GetSendreq,
  getreqfriend,
  GetFriends,
})(PrifilePeople);
