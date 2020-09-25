import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import Educationbox from './EducationFriend';
import { connect } from 'react-redux';
import Experienceboc from '../porfile/Experiencefriend';
import SendRequest from './SendRequest';
import DeleteFriend from './DeleteFriend';
import AcceptFriend from '../notification/AcceptFriend';
import SubEncad from '../Encadrement/Formaencadrement';

import {
  faUsers,
  faUniversity,
  faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';
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
import queryString from 'query-string';

const PrifilePeople = ({
  getProfileById,
  GetSendreq,
  getreqfriend,
  profile: { profile, loading },
  auth: { user },

  GetFriends,
  friends: { sendrequest, friendrequest, friends, friendreqnotif },
  location,
}) => {
  const { id } = queryString.parse(location.search);
  const nullProfile = !profile;
  let bool = false;
  let friendss = false;
  let sendfr = false;
  useEffect(() => {
    GetFriends();
    getProfileById(id);
    GetSendreq(id);
    getreqfriend(id);
  }, [getProfileById, GetSendreq, getreqfriend, GetFriends]);
  const [displayfriends, toggleSocialInputs] = useState({
    displayexper: false,
    displayeduc: false,
  });
  const { displayexper, displayeduc } = displayfriends;

  const displaymyexp = (e) => {
    toggleSocialInputs({
      displayexper: !displayexper,
      displayeduc: false,
      friendsdis: false,
    });
  };
  const displaymyeduca = (e) => {
    toggleSocialInputs({
      displayexper: false,
      displayeduc: !displayeduc,
      friendsdis: false,
    });
  };
  return (
    <Fragment>
      {profile === null || loading ? (
        <Fragment>
          <Spinner />
        </Fragment>
      ) : (
        <Fragment>
          {user._id === id ? (
            <Redirect to='/profile' />
          ) : (
            <Fragment>
              <header className='header '>
                <img className='back-prof' src={img} />

                <section className='myProfile'>
                  {/* <section className='header-row'>
                    <Educationbox /> */}
                  <div className='pdpandname'>
                    <img
                      className='photo-de-profile'
                      src={profile.user.avatar}
                      alt
                      logo
                    />

                    <div className='info-here'>
                      <h3 className='myname'>
                        {profile.user.firstname} {profile.user.lastname}
                      </h3>

                      <SubEncad id={id} />
                      <h3 className='typeuserprofile'>
                        {profile.user.typeuser.toUpperCase()}
                      </h3>

                      <Fragment>
                        <div className='invitation-position'>
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
                              {friend.user == id ? (
                                (friendss = true)
                              ) : (
                                <Fragment></Fragment>
                              )}
                            </div>
                          ))}

                          {sendrequest.map((el, i) => (
                            <div>
                              {el.user.includes(id) ? (
                                (bool = true)
                              ) : (
                                <Fragment></Fragment>
                              )}
                            </div>
                          ))}
                          {friendss ? (
                            <DeleteFriend id={id} />
                          ) : sendfr ? (
                            <div className='buttfredreq'>
                              <AcceptFriend id={id} />

                              <RejectFriend id={id} />
                            </div>
                          ) : bool == false ? (
                            <div className='buttpeoplprof'>
                              <SendRequest id={id} />
                            </div>
                          ) : (
                            <Deletereq id={id} />
                          )}
                        </div>
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
                      <section className='allbuttonprofile'>
                        <div
                          className={`${
                            !displayexper
                              ? 'friendbutton'
                              : 'friendbutton friendbuttonactive'
                          }`}
                          onClick={(e) => displaymyexp(e)}
                        >
                          <FontAwesomeIcon icon={faUniversity} />
                          Experience
                        </div>
                        <div
                          className={`${
                            !displayeduc
                              ? 'friendbutton'
                              : 'friendbutton friendbuttonactive'
                          }`}
                          onClick={(e) => displaymyeduca(e)}
                        >
                          <FontAwesomeIcon icon={faGraduationCap} />
                          Education
                        </div>
                      </section>

                      {displayexper && (
                        <Fragment>
                          <div className='buttposition'>
                            <Experienceboc />
                          </div>
                        </Fragment>
                      )}
                      {displayeduc && (
                        <Fragment>
                          <div className='buttposition'>
                            <Educationbox />
                          </div>
                        </Fragment>
                      )}
                    </div>
                  </div>
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
