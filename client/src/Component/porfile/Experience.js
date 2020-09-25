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
const Experience = ({ profile: { profile, loading }, location }) => {
  return (
    <Fragment>
      {profile.experience.length > 0 ? (
        <div className='box-expe'>
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
              Work at{' '}
              <Link to='/add-education' className='addbut'>
                {' '}
                <span className='essspace '> Add</span>
              </Link>
            </p>
          </div>
          <div className='educview'>
            <p className='espacebox'>
              <FontAwesomeIcon className='faGraduationCap' icon={faBookOpen} />
              Company{' '}
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
              Location{' '}
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

export default connect(mapStateToProps, {})(Experience);
