import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlackTie } from '@fortawesome/free-brands-svg-icons';
import {
  faUserCircle,
  faGraduationCap,
  
} from '@fortawesome/free-solid-svg-icons';
const DashboardActions = () => {
  return (
    <div>
      <Link to='/edit-profile'>
        <button className='dashbordbuttonedi firstbuttdashhas'>
          <FontAwesomeIcon className='faUserCircle' icon={faUserCircle} />
          Edit Profile
        </button>
      </Link>
      <Link to='/add-experience'>
        <button className='dashbordbuttonedi'>
          <FontAwesomeIcon className='faBlackTie' icon={faBlackTie} />
          Add Experience
        </button>
      </Link>

      <Link to='/add-education'>
        <button className='dashbordbuttonedi'>
          <FontAwesomeIcon className='faGraduationCap' icon={faGraduationCap} />
          Add education
        </button>
      </Link>
    </div>
  );
};
export default DashboardActions;
