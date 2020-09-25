import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCour } from '../../actions/Cours';
import axios from 'axios';
import { Button } from 'reactstrap';
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

const CoursForm = ({ addCour }) => {
  const [titles, setTitle] = useState({ isOpen: false, title: '' });
  const [discriptions, setdiscription] = useState({ text: '' });
  const [passwords, setPassword] = useState({ password: '' });
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [uploadedFile, setUploadedFile] = useState({});

  const [uploadPercentage, setUploadPercentage] = useState(0);

  const { isOpen, title } = titles;
  const { text } = discriptions;
  const { password } = passwords;
  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };
  const handleOpen = () => {
    setTitle({ ...titles, isOpen: !isOpen });
  };

  const closeModal = () => {
    setTitle({ ...titles, isOpen: false });
  };
  const onChangeTitle = (e) => {
    setTitle({ ...titles, title: e.target.value });
  };
  const onChangeDiscription = (e) => {
    setdiscription({ ...discriptions, text: e.target.value });
  };
  const onChangePassword = (e) => {
    setPassword({ ...passwords, password: e.target.value });
  };
  const vide = () => {
    setTitle({ ...titles, title: '', isOpen: false });
  };

  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append('file', file);

  //   try {
  //     const res = await axios.post('/api/uploads', formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //       onUploadProgress: (progressEvent) => {
  //         setUploadPercentage(
  //           parseInt(
  //             Math.round((progressEvent.loaded * 100) / progressEvent.total)
  //           )
  //         );

  //         // Clear percentage
  //         setTimeout(() => setUploadPercentage(0), 10000);
  //       },
  //     });

  //     const { fileName, filePath } = res.data;

  //     setUploadedFile({ fileName, filePath });
  //   } catch (err) {}
  // };

  return (
    <div>
      <h3 className='post-title'>Create Cours</h3>
      <Button
        onClick={() => handleOpen()}
        className='create-create'
        color='primary'
      >
        Add cours
      </Button>{' '}
      {/* </div> */}
      <Modal
        style={customStyles}
        isOpen={isOpen}
        onRequestClose={() => closeModal()}
      >
        <form
          className='form my-1'
          onSubmit={(e) => {
            // onSubmit={onSubmit}
            e.preventDefault();
            addCour({ title, text, password });
            vide();
          }}
        >
          <input
            type='input'
            name='title'
            placeholder='title'
            value={title}
            onChange={(e) => onChangeTitle(e)}
            required
            // className='create-post'
          />
          <input
            type='input'
            name='discription'
            placeholder='Discription'
            value={text}
            onChange={(e) => onChangeDiscription(e)}
            required
            // className='create-post'
          />
          <input
            type='password'
            name='text'
            cols='30'
            rows='5'
            placeholder='password'
            value={password}
            onChange={(e) => onChangePassword(e)}
            required
            // className='create-post'
          />

          {/* <input
            type='file'
            className='custom-file-input'
            id='customFile'
            onChange={onChange}
          /> */}

          <input type='submit' className='btn-sub' value='Submit' />
        </form>
      </Modal>
    </div>
  );
};

CoursForm.propTypes = {
  addCour: PropTypes.func.isRequired,
};

export default connect(null, { addCour })(CoursForm);
