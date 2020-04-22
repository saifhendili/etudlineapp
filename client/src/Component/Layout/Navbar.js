import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSignOutAlt,
  faUser,
  faCog,
  faSearch,
  faHome,
} from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import Logo from './logo';
import Notification from '../notification/Notification';
import { getsearch } from '../../actions/profile';
import { getProfileById } from '../../actions/profile';

function Navbar({
  auth: { isAuthenticated, loading, user },
  logout,

  profile: { search, profile },
  getsearch,
}) {
  const handleChange = (e) => {
    getsearch(e.target.value);
  };

  const authLinks = (
    <div className='navbarlogin'>
      <ul className='listnavbar'>
        {profile === null || loading ? (
          <Fragment></Fragment>
        ) : (
          <Notification id={profile.user._id} />
        )}

        <li>
          <form className='myformsearchinput'>
            <input
              type='text'
              placeholder='Search'
              onChange={(e) => handleChange(e)}
              name='searchin'
              className='search-input'
            />
            <Link to='profiles'>
              <button type='submit' className='iconsearch'>
                {' '}
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </Link>
          </form>
        </li>
        <li>
          <Link to='home' className='linknav'>
            <FontAwesomeIcon className='faUser' icon={faHome} />
            Home
          </Link>
        </li>
        <li>
          <Link to='profile' className='linknav'>
            <FontAwesomeIcon className='faUser' icon={faUser} />
            Profile
          </Link>
        </li>
        <li>
          <Link to='dashboard' className='linknav'>
            <FontAwesomeIcon className='faUser' icon={faCog} />
            Dashboard
          </Link>
        </li>
        <li>
          <a onClick={logout} href='#!' className='linknav'>
            <FontAwesomeIcon className='faSignOutAlt' icon={faSignOutAlt} />

            <span className='logout'>Logout</span>
          </a>
        </li>
      </ul>
    </div>
  );

  const guestLinks = (
    <ul className='listnavbar'>
      <li>
        <Link to='register' href='' className='linknav'>
          Register
        </Link>
      </li>
      <li>
        <Link to='login' className='linknav'>
          Login
        </Link>
      </li>
    </ul>
  );

  return (
    <div className='mynavvbar'>
      <Link to='/'>
        <Logo />
      </Link>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </div>
  );
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  getProfileById: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { logout, getsearch })(Navbar);
