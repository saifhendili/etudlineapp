import React, { Fragment, useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Spinner from '../Layout/Spinner';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { getProfileById } from '../../actions/profile';
// import DashboardActions from '../dashborad/DashboardActions';
import Educationbox from './Education';
import Experienceboc from '../porfile/Experience';
import img from '../../image/univer.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faLinkedin,
  faYoutubeSquare,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
const Profile = ({
  profile: { profile, loading },
  auth: { user },
}) => {
  return (
    <Fragment>
      {profile === null || loading ? (
        <Fragment>
          <Spinner />
          {/* {profile === null ? <h1>ok</h1> : <h1>non</h1>} */}
          <Redirect to='/create-profile' />
        </Fragment>
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
                    src={user.avatar}
                    alt
                    logo
                  />
                  <h3 className='myname'>
                    {user.firstname} {user.lastname}
                  </h3>
                  {!profile.social ? (
                    <Fragment>
                      {' '}
                      <Link to='/edit-profile'>
                        <button className='addsoc pos'>Add Social Media</button>
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
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});
Profile.propTypes = {
  // getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, {
  // getProfileById
})(Profile);
