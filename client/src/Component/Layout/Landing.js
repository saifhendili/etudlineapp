import React from 'react';
import pic from '../../image/computer-3368242_1920.jpg';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Landing({ isAuthenticated }) {
  if (isAuthenticated) return <Redirect to='dashboard' />;
  return (
    <div className='homecontainer'>
      <img
        className='backgroundimage'
        src={pic}
        width='100%'
        alt='background img'
      />
      <p className='textcontainer'>
        Create a profile, share posts and get help from other instructor
      </p>

      <div className='boutton-container-log'>
        <Link to='/register'>
          <button className='boutton-log signupbut'>Sign Up</button>
        </Link>

        <Link to='/login'>
          <button className='boutton-log login'>Login</button>
        </Link>
      </div>
      
    </div>
  );
}
Landing.prototype = {
  isAuthenticated: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps)(Landing);
