import React, { useState, Fragment } from 'react';
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
import { createProfile } from '../../actions/profile';

const CreateProfile = ({ createProfile, history }) => {
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
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onsubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history);
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
          <button
            className='addsoc'
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
          >
            Add Social Network Links{' '}
          </button>
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

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
};

export default connect(null, { createProfile })(withRouter(CreateProfile));
