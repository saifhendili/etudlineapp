import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';

import React, { useState } from 'react';
import Modal from 'react-modal';
const customStyles = {
  content: {
    top: '45%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    // height: '520',
    width: '730px',
    backgroundColor: '#1c1e21',
    color: 'white',
  },
};

const PostForm = ({ addPost }) => {
  const [texts, setText] = useState({ isOpen: false, text: '' });
  const { isOpen, text } = texts;
  const handleOpen = () => {
    setText({ ...texts, isOpen: !isOpen });
  };

  const closeModal = () => {
    setText({ ...texts, isOpen: false });
  };
  const onChange = (e) => {
    setText({ ...texts, text: e.target.value });
  };
  const vide = () => {
    setText({ ...texts, text: '', isOpen: false });
  };

  return (
    <div>
      <h3 className='post-title'>Create Post</h3>
      <textarea
        name='text'
        cols='30'
        onClick={() => handleOpen()}
        rows='5'
        placeholder='Create a post'
        value={text}
        required
        className='create-post'
      />
      {/* </div> */}
      <Modal
        style={customStyles}
        isOpen={isOpen}
        onRequestClose={() => closeModal()}
      >
        <form
          className='form my-1'
          onSubmit={(e) => {
            e.preventDefault();
            addPost({ text });
            vide();
          }}
        >
          <textarea
            name='text'
            cols='30'
            rows='5'
            placeholder='Create a post'
            value={text}
            onChange={(e) => onChange(e)}
            required
            // className='create-post'
          />
          <input type='submit' className='btn-sub' value='Submit' />
        </form>
      </Modal>
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(PostForm);
