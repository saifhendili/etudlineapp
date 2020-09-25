import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../actions/Cours';

const Commetform = ({ coursId, addComment }) => {
  const [text, setText] = useState('');

  return (
    <div className='post-form'>
      <h3 className='bg-leave-comment'>Leave a Comment</h3>

      <form
        className='form-comment'
        onSubmit={(e) => {
          e.preventDefault();
          addComment(coursId, { text });
          setText('');
        }}
      >
        <textarea
          name='text'
          cols='30'
          rows='5'
          placeholder='Comment the post'
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <input type='submit' className='btn-sub' value='Submit' />
      </form>
    </div>
  );
};

Commetform.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default connect(null, { addComment })(Commetform);
