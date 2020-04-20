import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import Educationbox from './Education';
import { connect } from 'react-redux';
import Experienceboc from '../porfile/Experience';
import SendRequest from './SendRequest';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faLinkedin,
  faYoutubeSquare,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import Spinner from '../Layout/Spinner';
import img from '../../image/univer.jpg';

import { getProfileById } from '../../actions/profile';

const PrifilePeople = ({
  getProfileById,
  profile: { profile, loading },
  auth: { user, isAuthenticated },
  match,
}) => {
  const nullProfile = !profile;
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById]);

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
                      <SendRequest id={match.params.id} />
                      {!profile.social ? (
                        <Fragment>
                          {' '}
                          <Link to='/edit-profile'>
                            <button className='addsoc pos'>
                              Add Social Media
                            </button>
                          </Link>
                        </Fragment>
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
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileById })(PrifilePeople);
