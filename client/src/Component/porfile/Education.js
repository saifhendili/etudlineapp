import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faGraduationCap,
  faHome,
  faBookOpen,
  faUniversity,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Education = ({ profile: { profile, loading }, location }) => {
  return (
    <Fragment>
      {profile.education.length > 0 ? (
        <div className='box-education'>
          <div className='educview'>
            <p className='espacebox'>
              <FontAwesomeIcon
                className='faGraduationCap'
                icon={faUniversity}
              />
              Studied at{' '}
              {profile.education.map((educ) => (
                <span className='essspace'> {educ.school},</span>
              ))}
            </p>
          </div>
          <div className='educview'>
            <p className='espacebox'>
              <FontAwesomeIcon className='faGraduationCap' icon={faBookOpen} />
              degree{' '}
              {profile.education.map((educ) => (
                <span className='essspace'> {educ.degree},</span>
              ))}
            </p>
          </div>
          <div className='educview'>
            <p className='espacebox'>
              <FontAwesomeIcon
                className='faGraduationCap'
                icon={faGraduationCap}
              />
              Field of Study{' '}
              {profile.education.map((educ) => (
                <span className='essspace'> {educ.fieldofstudy},</span>
              ))}
            </p>
          </div>
          <div className='educview'>
            <p className='espacebox'>
              <FontAwesomeIcon className='faGraduationCap' icon={faHome} />
              Lives in
              <span className='essspace'>{location}</span>
            </p>
          </div>
          <Link to='dashboard'>
            <button className='butteditprofile'>Edit Details</button>
          </Link>
        </div>
      ) : (
        <div className='box-education'>
          <div className='educview'>
            <p className='espacebox'>
              <FontAwesomeIcon
                className='faGraduationCap'
                icon={faUniversity}
              />
              Studied at{' '}
              <Link to='/add-education' className='addbut'>
                {' '}
                <span className='essspace '> Add</span>
              </Link>
            </p>
          </div>
          <div className='educview'>
            <p className='espacebox'>
              <FontAwesomeIcon className='faGraduationCap' icon={faBookOpen} />
              degree{' '}
              <Link to='/add-education' className='addbut'>
                {' '}
                <span className='essspace '> Add</span>
              </Link>
            </p>
          </div>
          <div className='educview'>
            <p className='espacebox'>
              <FontAwesomeIcon
                className='faGraduationCap'
                icon={faGraduationCap}
              />
              Field of Study{' '}
              <Link to='/add-education' className='addbut'>
                {' '}
                <span className='essspace '> Add</span>
              </Link>
            </p>
          </div>
          <div className='educview'>
            <p className='espacebox'>
              <FontAwesomeIcon className='faGraduationCap' icon={faHome} />
              Lives in
              {profile.location ? (
                <span className='essspace'>{profile.location}</span>
              ) : (
                <Link to='/edit-profile' className='addbut'>
                  {' '}
                  <span className='essspace '> Add</span>
                </Link>
              )}
            </p>
          </div>
          <Link to='dashboard'>
            <button className='butteditprofile'>Edit Details</button>
          </Link>
        </div>
      )}
    </Fragment>
  );
};
//     Education.propTypes = {
//     getProfileById: PropTypes.func.isRequired,
//     profile: PropTypes.object.isRequired,
//     auth: PropTypes.object.isRequired,
//   };

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, {})(Education);
