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
        <Link to={`/friendprofiles?id=${_id}`}>
          <div class='center'>
            <div class='property-card'>
              <div class='property-image'>
                <div>
                  <img class='property-image-reel' src={avatar} />
                </div>
              </div>

              <div class='property-description'>
                <h5>
                  {' '}
                  {firstname} {lastname}{' '}
                </h5>
                <p>
                  {typeuser} at {company}
                </p>
              </div>
            </div>
          </div>
        </Link>
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
