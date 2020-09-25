import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Form, FormControl, Button } from 'react-bootstrap';
import FriendOnline from '../Online/FriendOnline';
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
// import { logoutadmin } from '../../actions/admin';

import Logo from './logo';
import Notification from '../notification/Notification';
import { getsearch } from '../../actions/profile';
import { setofline } from '../../actions/auth';
function Navbar({
  // admin: { isAuthenticatedadmin },
  auth: { isAuthenticated, loading },
  logout,
  // logoutadmin,
  profile: { profile },
  getsearch,
  setofline,
}) {
  const loggout = (e) => {
    e.preventDefault();
    setofline();
    logout();
  };
  // const loggoutadmin = (e) => {
  //   e.preventDefault();
  //   logoutadmin();
  // };
  const handleChange = (e) => {
    getsearch(e.target.value);
  };

  const authLinks = (
    <div className='navbarlogin'>
      <ul className='listnavbar'>
        {profile === null || loading ? null : (
          <li>
            <Notification id={profile.user._id} />
          </li>
        )}

        <li>
          <Form inline>
            <FormControl
              type='text'
              placeholder='Search'
              onChange={(e) => handleChange(e)}
              name='searchin'
              className='mr-sm-2'
            />
            <Link className='Search-nav' to='profiles'>
              <Button type='submit' variant='outline-primary'>
                <FontAwesomeIcon className='faSearch' icon={faSearch} />
                Search
              </Button>
            </Link>
          </Form>
        </li>
        <li>
          <Link to='home' className='linknav'>
            <FontAwesomeIcon icon={faHome} />
            Forum de communication
          </Link>
          <div id='indicator'></div>
        </li>
        <li>
          <Link to='cours' className='linknav'>
            <FontAwesomeIcon icon={faHome} />
            cours
          </Link>
          <div id='indicator'></div>
        </li>
        <li>
          <Link to='profile' className='linknav'>
            <FontAwesomeIcon className='' icon={faUser} />
            Profile
          </Link>
          <div id='indicator'></div>
        </li>
        <li>
          <Link to='dashboard' className='linknav'>
            <FontAwesomeIcon icon={faCog} />
            Dashboard
          </Link>
          <div id='indicator'></div>
        </li>
        <li>
          <Link to='encadrement' className='linknav'>
            <FontAwesomeIcon icon={faCog} />
            Encadrement
          </Link>
          <div id='indicator'></div>
        </li>

        {/* <FontAwesomeIcon icon={faCog} /> */}

        <li>
          <a onClick={(e) => loggout(e)} href='#!' className='linknav'>
            <FontAwesomeIcon className='faSignOutAlt' icon={faSignOutAlt} />
            <span className='logout'>Logout</span>
          </a>
          <div id='indicator'></div>
        </li>
      </ul>
    </div>
  );

  const guestLinks = (
    <ul className='listnavbar list-navbarlogin'>
      <li>
        <Link to='register' href='' className='linknav'>
          Register
        </Link>
        <div id='indicator'></div>
      </li>
      <li>
        <Link to='login' className='linknav'>
          Login
        </Link>
        <div id='indicator'></div>
      </li>
    </ul>
  );

  const adminLinks = (
    <div className='navbarlogin navbaradmin'>
      <ul className='listnavbar'>
        <li>
          <Link to='Dashboard' className='linknav'>
            <FontAwesomeIcon icon={faCog} />
            Dashboard
          </Link>

          <div id='indicator'></div>
        </li>
        <li>
          <a onClick={(e) => loggout(e)} href='#!' className='linknav'>
            <FontAwesomeIcon className='faSignOutAlt' icon={faSignOutAlt} />
            <span className='logout'>Logout</span>
          </a>
          <div id='indicator'></div>
        </li>
      </ul>
    </div>
  );

  return (
    <div className='mynavvbar'>
      <Link to='/'>
        <Logo />
      </Link>

      <Fragment>
        {loading
          ? null
          : isAuthenticated &&
            profile !== null &&
            profile.user.typeuser == 'isAdmin'
          ? adminLinks
          : isAuthenticated &&
            profile !== null &&
            profile.user.typeuser == 'user'
          ? adminLinks
          : isAuthenticated
          ? authLinks
          : guestLinks}
      </Fragment>

      {/* <Fragment>
        {profile === null || loading
          ? null
          : isAuthenticated && profile.user.typeuser == 'isAdmin'
          ? adminLinks
          : isAuthenticated
          ? authLinks
          : guestLinks}
      </Fragment> */}
    </div>
  );
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  setofline: PropTypes.func.isRequired,
  // logoutadmin: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
  // admin: state.admin,
});

export default connect(mapStateToProps, {
  logout,
  getsearch,
  setofline,
  // logoutadmin,
})(Navbar);
