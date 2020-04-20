import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { addExperience } from '../../actions/profile';

const AddExperience = ({ addExperience, history }) => {
  const [formData, setFormData] = useState({
    company: '',
    title: '',
    location: '',
    from: '',
    to: '',
    current: false,
    description: '',
  });
  const { company, title, location, from, to, current, description } = formData;
  const [toDateDisabled, toggleDisabled] = useState(false);
  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const onsubmit = (e) => {
    e.preventDefault();
    addExperience(formData, history);
  };
  return (
    <Fragment>
      <h1 className='titlecreateprofile'>Add An Experience</h1>
      <p className='praracreateprofile'>
        Add any developer/programming positions that you have had in the past
      </p>
      <p className='requireinput'>* = required field</p>
      <form className='form' onSubmit={(e) => onsubmit(e)}>
        <input
          type='text'
          placeholder='* Job Title'
          name='title'
          value={title}
          onChange={(e) => onChange(e)}
          className='myinputCreateProfile'
        />
        <input
          type='text'
          placeholder='* Company'
          name='company'
          value={company}
          onChange={(e) => onChange(e)}
          className='myinputCreateProfile'
        />
        <input
          type='text'
          placeholder='Location'
          name='location'
          value={location}
          onChange={(e) => onChange(e)}
          className='myinputCreateProfile'
        />
        <h4 className='infocreateprof'>From Date</h4>
        <input
          type='date'
          name='from'
          value={from}
          onChange={(e) => onChange(e)}
          className='myinputCreateProfile'
        />
        <p className='infocreateprof'>
          <input
            type='checkbox'
            name='current'
            checked={current}
            value={current}
            onChange={() => {
              setFormData({ ...formData, current: !current });
              toggleDisabled(!toDateDisabled);
            }}
          />{' '}
          <label for='current'>Current Job</label>
        </p>
        <h4 className='infocreateprof'>To Date</h4>
        <input
          type='date'
          name='to'
          value={to}
          onChange={(e) => onChange(e)}
          disabled={toDateDisabled ? 'disabled' : ''}
          className='myinputCreateProfile'
        />
        <textarea
          name='description'
          cols='30'
          rows='5'
          placeholder='Job Description'
          className='myinputCreateProfile'
          value={description}
          onChange={(e) => onChange(e)}
        />
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
AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
};

export default connect(null, { addExperience })(withRouter(AddExperience));
