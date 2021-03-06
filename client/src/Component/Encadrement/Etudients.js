import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Etudients = ({ friends }) => {
  return (
    <Fragment>
      <h3 className='friend-title'>My Friends</h3>
      <div>
        {friends.map((el, i) => (
          <Fragment key={i}>
            {el.avatar == '' ? null : (
              <Link to={`/friendprofiles?id=${el._id}`}>
                <div className='onefriend' key={i}>
                  <img
                    src={el.avatar}
                    alt='avatar'
                    className='avatarfriendbox'
                  />
                  <p>
                    {el.firstname} {el.lastname}
                  </p>
                </div>
              </Link>
            )}
          </Fragment>
        ))}
      </div>
    </Fragment>
  );
};

Etudients.propTypes = {};

export default Etudients;
