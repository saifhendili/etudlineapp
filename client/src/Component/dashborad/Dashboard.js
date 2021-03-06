import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../Layout/Spinner';
import DashboardActions from './DashboardActions';
import MenuDashboard from './MenuDashboard';
// import Experience from './Experience';
// import Education from './Education';
// import { setONline, setofline } from '../../actions/auth';

import { getCurrentProfile } from '../../actions/profile';

const Dashboard = ({
  getCurrentProfile,
  auth: { user, isAuthenticated },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1
        className={
          profile !== null ? 'stype-dash-title' : 'new-stype-dash-title'
        }
      >
        Dashboard
      </h1>
      <div className='welcomuser'>
        <img
          src={user.avatar}
          alt='user'
          className={
            profile !== null ? 'avatardashboard' : 'newavatardashboard'
          }
        />
        <h1 className='welcome-Title'>
          {/* <FontAwesomeIcon className='faUsertitle' icon={faUser} /> */}
          Welcome {user && user.firstname}
        </h1>
      </div>
      {profile !== null ? (
        <Fragment>
          <MenuDashboard user={user} />
        </Fragment>
      ) : (
        <Fragment>
          <h1 className='PrographeNoProfile'>
            You have not yet setup a profile, please add some information
          </h1>
          <Link to='create-profile'>
            {' '}
            <button className='buttonCreateProfile'>Create Profile</button>
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, {
  getCurrentProfile,
})(Dashboard);
