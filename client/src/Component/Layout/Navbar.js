import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
function Navbar({ auth: { isAuthenticated, loading }, logout }) {
  const authLinks = (
    <ul className='listnavbar'>
      <li>
        <Link to='dashboard' className='linknav'>
          <FontAwesomeIcon className='faUser' icon={faUser} />
          Dashbord
        </Link>
      </li>
      <li>
        <a onClick={logout} href='#!' className='linknav'>
          <FontAwesomeIcon className='faSignOutAlt' icon={faSignOutAlt} />

          <span className='logout'>Logout</span>
        </a>
      </li>
    </ul>
  );
  const [sethover, HandelMouseOver] = useState({
    ishover1: false,
    ishover2: false,
    ishover3: false,
  });
  const { ishover1, ishover2, ishover3 } = sethover;
  const SetItem = () => {
    HandelMouseOver({ ...sethover, ishover1: !ishover1 });
  };
  const setitemhover2 = () => {
    HandelMouseOver({ ...sethover, ishover2: !ishover2 });
  };
  const setitemhover3 = () => {
    HandelMouseOver({ ...sethover, ishover3: !ishover3 });
  };
  const oui = () => {
    console.log(sethover.ishover3);
  };
  const guestLinks = (
    <ul className='listnavbar'>
      <li>
        <Link to='/register' href='' className='linknav'>
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
        {!sethover.ishover1 && !sethover.ishover2 && !sethover.ishover3 ? (
          <div className='logokink'>
            <span className='firstnlogo' onClick={() => oui()}>{`<Etud`}</span>
            <span
              className='secnlogo'
              onMouseOver={() => SetItem()}
            >{`Line`}</span>
            <span
              className='slashnlogo'
              onMouseOver={() => setitemhover2()}
            >{` / `}</span>
            <span
              className='secnlogo'
              onMouseOver={() => setitemhover3()}
            >{`>`}</span>
          </div>
        ) : sethover.ishover2 ? (
          <div className='logokink2'>
            <div className='firstdivreverse'>
              <span
                className='slashnlogo2'
                onMouseLeave={() => HandelMouseOver(!ishover2)}
              >{` / `}</span>
              <span
                className='secnlogo'
                onMouseLeave={() => HandelMouseOver(!ishover1)}
              >{`Line `}</span>
              <span className='firstnlogo'>{`<Etud`}</span>
            </div>

            {ishover2 ? <span className='lastitemlog'>{`>`}</span> : ''}
          </div>
        ) : sethover.ishover3 ? (
          <div className='logokink2'>
            <div className='firstdivreverse'>
              <span
                className='lastitemlog'
                onMouseLeave={() => HandelMouseOver(!ishover3)}
              >{`>`}</span>
              <span
                className='slashnlogo2'
                onMouseLeave={() => HandelMouseOver(!ishover2)}
              >{` / `}</span>
              <span
                className='secnlogo'
                onMouseLeave={() => HandelMouseOver(!ishover1)}
              >{`Line `}</span>
              <span className='firstnlogo'>{`<Etud`}</span>
            </div>
          </div>
        ) : (
          <div className='logokink2'>
            <div className='firstdivreverse'>
              <span
                className='secnlogo'
                onMouseLeave={() => HandelMouseOver(!ishover1)}
              >{`Line `}</span>
              <span className='firstnlogo'>{`<Etud`}</span>
            </div>
            {ishover1 ? <span className='slashnlogo2'>{` / `}</span> : ''}
            {ishover1 ? <span className='lastitemlog'>{`>`}</span> : ''}
          </div>
        )}
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
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
