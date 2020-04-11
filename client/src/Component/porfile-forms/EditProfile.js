import React, { useState, Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookSquare,
  faLinkedin,
  faYoutubeSquare,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';

const EditProfile = ({
  profile: { profile, loading },
  createProfile,

  getCurrentProfile,
  history,
}) => {
  const [formData, setFormData] = useState({
    company: '',
    website: '',
    location: '',
    status: '',
    skills: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: '',
  });
  const {
    company,
    website,
    location,
    status,
    skills,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram,
  } = formData;
  const [displaySocialInputs, toggleSocialInputs] = useState(false);
  useEffect(() => {
    getCurrentProfile();
    setFormData({
      company: loading || !profile.company ? '' : profile.company,
      website: loading || !profile.website ? '' : profile.website,
      location: loading || !profile.location ? '' : profile.location,
      status: loading || !profile.status ? '' : profile.status,
      skills: loading || !profile.skills ? '' : profile.skills.join(','),

      bio: loading || !profile.bio ? '' : profile.bio,
      twitter: loading || !profile.social ? '' : profile.social.twitter,
      facebook: loading || !profile.social ? '' : profile.social.facebook,
      linkedin: loading || !profile.social ? '' : profile.social.linkedin,
      youtube: loading || !profile.social ? '' : profile.social.youtube,
      instagram: loading || !profile.social ? '' : profile.social.instagram,
    });
  }, [loading]);
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onsubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history, true);
  };

  return (
    <Fragment>
      <h1 className='titlecreateprofile'>Create Your Profile</h1>

      <p className='praracreateprofile'>
        <FontAwesomeIcon className='faUsertitle2' icon={faUser} />
        Let's get some information to make your profile stand out
      </p>
      <p className='requireinput'>* = required field</p>
      <form onSubmit={(e) => onsubmit(e)}>
        <div className='formprofilecreate'>
          <input
            type='text'
            className='myinputCreateProfile'
            placeholder='Status'
            name='status'
            value={status}
            onChange={(e) => onChange(e)}
          />
          <p className='infocreateprof'></p>
          <input
            type='text'
            className='myinputCreateProfile'
            onChange={(e) => onChange(e)}
            placeholder='Company'
            name='company'
            value={company}
          />
          <p className='infocreateprof'>Could be your faculty</p>
          <input
            type='text'
            className='myinputCreateProfile'
            placeholder='Location'
            onChange={(e) => onChange(e)}
            name='location'
            value={location}
          />
          <p className='infocreateprof'>City suggested (eg. tunis )</p>
          <input
            type='text'
            onChange={(e) => onChange(e)}
            className='myinputCreateProfile'
            placeholder='Website'
            name='website'
            value={website}
          />
          <p className='infocreateprof'>
            Could be your own or a company website
          </p>

          <input
            type='text'
            onChange={(e) => onChange(e)}
            className='myinputCreateProfile'
            placeholder='Skills'
            name='skills'
            value={skills}
          />

          <p className='infocreateprof'>
            Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
          </p>
          <textarea
            type='text'
            onChange={(e) => onChange(e)}
            className='myinputCreateProfile'
            placeholder='A short bio of yourself'
            name='bio'
            value={bio}
          />
          <p className='infocreateprof'>Tell us a little about yourself</p>
          <div
            className='addsoc'
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
          >
            Add Social Network Links{' '}
          </div>
          {displaySocialInputs && (
            <Fragment>
              {' '}
              <div className='social'>
                <FontAwesomeIcon
                  className='faFacebook'
                  icon={faFacebookSquare}
                />
                <input
                  type='text'
                  onChange={(e) => onChange(e)}
                  className='socialinput'
                  placeholder='Facebook URL'
                  name='facebook'
                  value={facebook}
                />
              </div>
              <div className='social'>
                <FontAwesomeIcon className='faYoutube' icon={faYoutubeSquare} />
                <input
                  type='text'
                  onChange={(e) => onChange(e)}
                  className='socialinput'
                  placeholder='Youtube URL'
                  name='youtube'
                  value={youtube}
                />
              </div>
              <div className='social'>
                <FontAwesomeIcon className='faLinkdin' icon={faLinkedin} />
                <input
                  type='text'
                  onChange={(e) => onChange(e)}
                  className='socialinput'
                  placeholder='Linkedin URL'
                  name='linkedin'
                  value={linkedin}
                />
              </div>
              <div className='social'>
                <FontAwesomeIcon className='faTwitter' icon={faTwitter} />
                <input
                  type='text'
                  className='socialinput'
                  placeholder='Twitter URL'
                  onChange={(e) => onChange(e)}
                  name='twitter'
                  value={twitter}
                />
              </div>
              <div className='social'>
                <FontAwesomeIcon className='faInstagram' icon={faInstagram} />
                <input
                  type='text'
                  className='socialinput'
                  onChange={(e) => onChange(e)}
                  placeholder='Instagram URL'
                  name='instagram'
                  value={instagram}
                />
              </div>
            </Fragment>
          )}
          <div className='buttonSubProfCRE'>
            <button className='subprof'>Submit</button>
            <Link to='/dashboard'>
              {' '}
              <button className='backprof'>Go Back</button>
            </Link>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};
const mapStateToProfile = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProfile, { createProfile, getCurrentProfile })(
  withRouter(EditProfile)
);
