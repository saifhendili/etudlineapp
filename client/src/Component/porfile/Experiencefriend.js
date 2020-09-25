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
const Experiencefriend = ({ profile: { profile, loading }, location }) => {
  return (
    <Fragment>
      {profile.experience.length > 0 ? (
        <div className='box-education'>
          <div className='educview'>
            <p className='espacebox'>
              <FontAwesomeIcon
                className='faGraduationCap'
                icon={faUniversity}
              />
              work at{' '}
              {profile.experience.map((educ) => (
                <span className='essspace'> {educ.title},</span>
              ))}
            </p>
          </div>
          <div className='educview'>
            <p className='espacebox'>
              <FontAwesomeIcon className='faGraduationCap' icon={faBookOpen} />
              Company{' '}
              {profile.experience.map((educ) => (
                <span className='essspace'> {educ.company},</span>
              ))}
            </p>
          </div>
          <div className='educview'>
            <p className='espacebox'>
              <FontAwesomeIcon
                className='faGraduationCap'
                icon={faGraduationCap}
              />
              Location{' '}
              {profile.experience.map((educ) => (
                <span className='essspace'> {educ.location},</span>
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
              Work at ...
            </p>
          </div>
          <div className='educview'>
            <p className='espacebox'>
              <FontAwesomeIcon className='faGraduationCap' icon={faBookOpen} />
              Company ...
            </p>
          </div>
          <div className='educview'>
            <p className='espacebox'>
              <FontAwesomeIcon
                className='faGraduationCap'
                icon={faGraduationCap}
              />
              Location ...
            </p>
          </div>
          <div className='educview'>
            <p className='espacebox'>
              <FontAwesomeIcon className='faGraduationCap' icon={faHome} />
              Lives in
              {profile.location ? (
                <span className='essspace'>{profile.location}</span>
              ) : (
                <span className='essspace '> ...</span>
              )}
            </p>
          </div>
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

export default connect(mapStateToProps, {})(Experiencefriend);
