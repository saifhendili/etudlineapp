import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';
import { connect } from 'react-redux';
import { deleteEducation } from '../../actions/profile';
import { getCurrentProfile } from '../../actions/profile';

const Education = ({
  profile: { profile, loading },
  getCurrentProfile,
  deleteEducation,
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);
  const educations = profile.education.map((edu) => (
    <tr key={edu._id}>
      <td className='info-table'>{edu.school}</td>
      <td className='info-table'>{edu.degree}</td>
      <td className='info-table-date'>
        <Moment format='YYYY/MM/DD'>{moment.utc(edu.from)}</Moment> -{' '}
        {edu.to === null ? (
          ' Now'
        ) : (
          <Moment format='YYYY/MM/DD'>{moment.utc(edu.to)}</Moment>
        )}
      </td>
      <td>
        <button onClick={() => deleteEducation(edu._id)} className='btn-danger'>
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className='my-2'>Education Credentials</h2>
      <table className='table'>
        <thead>
          <tr>
            <th className='hide-sm'>School</th>
            <th className='hide-sm'>Degree</th>
            <th className='hide-sm'>Years</th>
            <th className='spacee' />
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>
    </Fragment>
  );
};

Education.propTypes = {
  deleteEducation: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  profile: state.profile,
});
export default connect(mapStateToProps, { deleteEducation, getCurrentProfile })(
  Education
);
