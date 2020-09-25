import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlackTie } from '@fortawesome/free-brands-svg-icons';
import {
  faUserCircle,
  faGraduationCap,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
const MenuDashboard = ({ user }) => {
  return (
    <Fragment>
      {user.typeuser == 'isAdmin' ? (
        <div className='bordermenu'>
          <Link className='linkmenuadmin' to='/all-users'>
            Users
          </Link>
          <Link className='linkmenuadmin' to='/all-posts'>
            Posts
          </Link>
        </div>
      ) : user.typeuser == 'user' ? (
        // {user.typeuser !== 'isAdmin' ? (
        <div className='bordermenu'>
          <Link className='linkmenuadmin' to='/all-posts'>
            Posts
          </Link>
        </div>
      ) : (
        <div className='bordermenu'>
          {' '}
          <Link className='linkmenu' to='/edit-profile'>
            <FontAwesomeIcon className='faUserCircle' icon={faUserCircle} />
            Edit Profile
          </Link>
          <Link className='linkmenu' to='/add-experience'>
            <FontAwesomeIcon className='faBlackTie' icon={faBlackTie} />
            Add Experience
          </Link>
          <Link className='linkmenu' to='/add-education'>
            <FontAwesomeIcon
              className='faGraduationCap'
              icon={faGraduationCap}
            />
            Add education
          </Link>
          <Link className='linkmenu' to='/delete-education'>
            <FontAwesomeIcon className='faGraduationCap' icon={faTrashAlt} />
            Delete education
          </Link>
          <Link className='linkmenu' to='/delete-experience'>
            <FontAwesomeIcon className='faGraduationCap' icon={faTrashAlt} />
            Delete Experience
          </Link>
        </div>
      )}
    </Fragment>
  );
};

export default MenuDashboard;
