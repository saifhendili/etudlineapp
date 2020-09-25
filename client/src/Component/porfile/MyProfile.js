import React, { Fragment, useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Spinner from '../Layout/Spinner';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Friend from './Friend';
// import { getProfileById } from '../../actions/profile';
// import DashboardActions from '../dashborad/DashboardActions';
import Educationbox from './Education';
import Experienceboc from '../porfile/Experience';
import { GetFriends } from '../../actions/friends';
// import Room from '../chat/FrinedOnline';
import img from '../../image/univer.jpg';
import {
  faUsers,
  faUniversity,
  faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';

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
  GetFriends,
  friends: { friends },
}) => {
  useEffect(() => {
    GetFriends();
  }, [GetFriends]);
  const [displayfriends, toggleSocialInputs] = useState({
    friendsdis: false,
    displayexper: false,
    displayeduc: false,
  });
  const { friendsdis, displayexper, displayeduc } = displayfriends;
  const displaymyfriends = (e) => {
    toggleSocialInputs({
      displayexper: false,
      displayeduc: false,
      friendsdis: !friendsdis,
    });
  };
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
          <Redirect to='/create-profile' />
        </Fragment>
      ) : (
        <Fragment>
          <header className='header '>
            <img className='back-prof' src={img} />

            <section className='myProfile'>
              {/* <section className='header-row'> */}
              {/* <Educationbox /> */}

              <div className='pdpandname'>
                <img className='photo-de-profile' src={user.avatar} />
                <div className='info-here'>
                  <h3 className='myname'>
                    {user.firstname} {user.lastname}
                  </h3>
                  <h3 className='typeuserprofile'>
                    {user.typeuser.toUpperCase()}
                  </h3>
                  {!profile.social ? (
                    <Fragment>
                      {' '}
                      <Link to='/edit-profile'>
                        <button className='addsoc '>Add Social Media</button>
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
                  <section className='allbuttonprofile'>
                    <div
                      className={`${
                        !friendsdis
                          ? 'friendbutton'
                          : 'friendbutton friendbuttonactive'
                      }`}
                      onClick={(e) => displaymyfriends(e)}
                    >
                      <FontAwesomeIcon icon={faUsers} />
                      Friends
                    </div>
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
                  {friendsdis && (
                    <Fragment>
                      <div className='friendbox buttposition'>
                        <Friend friends={friends} />
                      </div>
                    </Fragment>
                  )}
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
                {/* <span className='positin-button-action-profile'>
                    <DashboardActions />
                  </span> */}
              </div>
              {/* <Experienceboc />
              </section> */}
            </section>
          </header>
          <main>
            <section>{/* <Roo m /> */}</section>
          </main>
        </Fragment>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
  friends: state.friends,
});
Profile.propTypes = {
  // getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  GetFriends: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
  // getProfileById
  GetFriends,
})(Profile);
