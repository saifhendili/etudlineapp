import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';
import { connect } from 'react-redux';
import { deleteExperience } from '../../actions/profile';
import { getCurrentProfile } from '../../actions/profile';

const Experience = ({
  profile: { profile, loading },
  deleteExperience,
  getCurrentProfile,
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);
  const experiences = profile.experience.map((exp) => (
    <tr key={exp._id}>
      <td className='info-table'>{exp.company}</td>
      <td className='info-table'>{exp.title}</td>
      <td className='info-table-date'>
        <Moment format='YYYY/MM/DD'>{moment.utc(exp.from)}</Moment> -{' '}
        {exp.to === null ? (
          ' Now'
        ) : (
          <Moment format='YYYY/MM/DD'>{moment.utc(exp.to)}</Moment>
        )}
      </td>
      <td>
        <button
          onClick={() => deleteExperience(exp._id)}
          className='btn-danger'
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <div className='experiencecontainer'>
        <div className='my-2'>
          {' '}
          <h2>Experience Credentials</h2>
        </div>

        <table className='table'>
          <thead>
            <tr>
              <th className='hide-sm'>Company</th>
              <th className='hide-sm'>Title</th>
              <th className='hide-sm'>Years</th>
              <th className='spacee' />
            </tr>
          </thead>
          <tbody>{experiences}</tbody>
        </table>
      </div>
    </Fragment>
  );
};

Experience.propTypes = {
  // experience: PropTypes.array.isRequired,
  deleteExperience: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, {
  deleteExperience,
  getCurrentProfile,
})(Experience);
