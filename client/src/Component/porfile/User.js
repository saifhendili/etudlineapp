import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const User = ({
  profile: {
    user: { _id, firstname, lastname, avatar, typeuser },
    company,
  },
  search,
}) => {
  return (
    <Fragment>
      {firstname.includes(search.toLowerCase()) ||
      lastname.includes(search.toLowerCase()) ? (
        <div className='profile'>
          <div className='info-viewprof'>
            <Link className='linksmpl' to={`/profiles/${_id}`}>
              <img src={avatar} alt='avatar' className='squard-img' />
            </Link>

            <div>
              <Link className='linksmpl' to={`/profiles/${_id}`}>
                <h2 className='name-send-req'>
                  {firstname} {lastname}
                </h2>
              </Link>
              <p className='firstpart-req'>
                <span className='typeusers'>{typeuser}</span>{' '}
                {company && <span> at {company}</span>}
              </p>
            </div>
          </div>
          {/* <p className='my-1'>{location && <span>{location}</span>}</p> */}
          <Link to={`/profiles/${_id}`}>
            <button className='view-profile'> View Profile</button>
          </Link>

          {/* <ul>
           {skills.slice(0, 4).map((skill, index) => (
             <li key={index} className='text-primary'>
               <i className='fas fa-check' /> {skill}
             </li>
           ))}
         </ul> */}
        </div>
      ) : (
        <Fragment></Fragment>
      )}
    </Fragment>
  );
};

User.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default User;
