import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEducation } from '../../actions/profile';

const AddEducation = ({ addEducation, history }) => {
  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    fieldofstudy: '',
    from: '',
    to: '',
    current: false,
    description: '',
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const {
    school,
    degree,
    fieldofstudy,
    from,
    to,
    current,
    description,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <h1 className='titlecreateprofile'>Add Your Education</h1>
      <p className='praracreateprofile'>
        {/* <i className='fas fa-code-branch' />  */}
        Add any school or bootcamp that you have attended
      </p>
      <p className='requireinput'>* = required field</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addEducation(formData, history);
        }}
        className='form'
      >
        <input
          type='text'
          placeholder='* School or Bootcamp'
          name='school'
          value={school}
          onChange={(e) => onChange(e)}
          className='myinputCreateProfile'
        />

        <input
          type='text'
          placeholder='* Degree or Certificate'
          name='degree'
          value={degree}
          className='myinputCreateProfile'
          onChange={(e) => onChange(e)}
        />

        <input
          type='text'
          placeholder='* Field of Study'
          name='fieldofstudy'
          value={fieldofstudy}
          onChange={(e) => onChange(e)}
          className='myinputCreateProfile'
        />

        <h4 className='infocreateprof'>From Date</h4>
        <input
          type='date'
          name='from'
          max='01-01-2019'
          value={from}
          onChange={(e) => onChange(e)}
          className='myinputCreateProfile'
        />
        <p className='infocreateprof'>
          <input
            type='checkbox'
            name='current'
            id='current'
            checked={current}
            value={current}
            onChange={() => {
              setFormData({ ...formData, current: !current });
              toggleDisabled(!toDateDisabled);
            }}
          />{' '}
          <label for='current'>Current School</label>
        </p>
        <h4 className='infocreateprof'>To Date</h4>
        <input
          type='date'
          name='to'
          value={to}
          onChange={(e) => onChange(e)}
          className='myinputCreateProfile'
          disabled={toDateDisabled ? 'disabled' : ''}
        />
        {
          <textarea
            name='description'
            cols='30'
            rows='5'
            placeholder='Program Description'
            value={description}
            onChange={(e) => onChange(e)}
            className='myinputCreateProfile'
          />
        }
        <div className='buttsubeduca'>
          <button type='submit' className='subprof butt'>
            Submit
          </button>
          <Link to='/dashboard'>
            <button className='backprof butt'>Go Back</button>
          </Link>
        </div>
      </form>
    </Fragment>
  );
};

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
};

export default connect(null, { addEducation })(withRouter(AddEducation));
