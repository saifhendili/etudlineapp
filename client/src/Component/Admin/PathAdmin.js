import React, { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link, Redirect } from 'react-router-dom';
import { login } from '../../actions/admin';
import img from '../../image/formation2.jpg';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function PathAdmin({ login, isAuthenticatedadmin }) {
  const [fromData, setFormData] = useState({
    email: '',
    passwordAdmin: '',
  });
  const { email, passwordAdmin } = fromData;
  const hundelchange = (e) =>
    setFormData({ ...fromData, [e.target.name]: e.target.value });
  const onsubmit = (e) => {
    e.preventDefault();
    login(email, passwordAdmin);
  };
  if (isAuthenticatedadmin) {
    return <Redirect to='/DashboardAdmin' />;
  }
  return (
    <div className='mybodylog'>
      <img className='imageloginn' src={img} />
      <div className='logbor'>
        <p className='signuplogo'>Sign In as administrator</p>
        <div className='create-pro'>
          <FontAwesomeIcon className='faUser' icon={faUser} />
          <p className='paragraphe-create-pro'>Sign Into Your Account</p>
        </div>

        <form className='register-form' onSubmit={(e) => onsubmit(e)}>
          <input
            className='myinput'
            type='email'
            placeholder='Email'
            name='email'
            value={email}
            onChange={(e) => hundelchange(e)}
            required
          />
          <input
            className='myinput'
            type='password'
            placeholder='Password'
            name='passwordAdmin'
            value={passwordAdmin}
            minLength='6'
            onChange={(e) => hundelchange(e)}
            required
          />

          <input className='submitcreatepro' type='submit' value='Log in' />
        </form>
      </div>
    </div>
  );
}
PathAdmin.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticatedadmin: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  isAuthenticatedadmin: state.admin.isAuthenticatedadmin,
});
export default connect(mapStateToProps, { login })(PathAdmin);
