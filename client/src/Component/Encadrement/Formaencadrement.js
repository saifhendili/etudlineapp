import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEncadrement } from '../../actions/encadrement';

function Formandsub({ addEncadrement, id }) {
  const [date, setText] = useState('');

  return (
    <div className='post-form'>
      <div className='bg-primary p'></div>
      <form
        className='formencadrement'
        onSubmit={(e) => {
          e.preventDefault();
          addEncadrement({ date, id });
          setText('');
        }}
      >
        <label>Date d'encarement...</label>
        <input
          type='date'
          name='date'
          cols='30'
          rows='5'
          className='dateenc'
          placeholder='date'
          value={date}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <input type='submit' className='btn btn-dark my-1' value='Submit' />
      </form>
    </div>
  );
}

Formandsub.propTypes = {
  addEncadrement: PropTypes.func.isRequired,
};

export default connect(null, { addEncadrement })(Formandsub);
