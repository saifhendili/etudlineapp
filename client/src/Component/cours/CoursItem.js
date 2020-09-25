import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faThumbsUp,
  faThumbsDown,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { addLike, removeLike, deleteCours } from '../../actions/Cours';
function CoursItem({
  addLike,
  removeLike,
  deleteCours,
  auth,
  showActions,
  cour: {
    _id,
    firstname,
    lastname,
    avatar,
    user,
    title,
    password,
    text,
    likes,
    comments,
    date,
  },
}) {
  const [passwordtry, setPassword] = useState('');
  return (
    <div className='post'>
      <div className='infopost'>
        <div className='delete-ppost'>
          <Link className='post-icon' to={`/profile/${user}`}>
            <img className='squard-img2' src={avatar} alt='' />
            <h4 className='name-post'>
              {firstname} {lastname}
            </h4>
          </Link>
          {!auth.loading && user === auth.user._id && (
            // type='button'
            // className='btn-danger btn-delete'

            <Button color='danger' onClick={() => deleteCours(_id)}>
              danger
            </Button>
          )}
        </div>
        <small className='post-date'>
          Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
        </small>
      </div>
      <div className='buttpost'>
        <p className='my-1'>{title}</p>
        <p className='my-1'>{text}</p>
        {/* {showActions && (
          <div className='listbuttpost'>
            <button
              onClick={() => addLike(_id)}
              type='button'
              className='btn-post'
            >
              <FontAwesomeIcon icon={faThumbsUp} />

              <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
            </button>
            <button
              onClick={() => removeLike(_id)}
              type='button'
              className='btn-post'
            >
              <FontAwesomeIcon icon={faThumbsDown} />
            </button>

            <Link to={`/posts?id=${_id}`} className='btn-comments'>
              Comment{' '}
              {comments.length > 0 && (
                <span className='comment-count'>{comments.length}</span>
              )}
            </Link>
          </div>
        )} */}
      </div>
      <form
        className='form my-1'
        // onSubmit={(e) => {
        //   e.preventDefault();
        //   getCour({ password, id });
        //   setText('');
        // }}
      >
        <input
          type='Password'
          name='Password'
          cols='30'
          rows='5'
          placeholder='Create a post'
          value={passwordtry}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Link
          to={`${
            password === passwordtry ? `coursdetails?id=${_id}` : 'cours'
          }`}
        >
          <input
            type='submit'
            className='btn btn-dark my-1'
            value='Get your Cours '
          />
        </Link>
      </form>
    </div>
  );
}
CoursItem.defaultProps = {
  showActions: true,
};

CoursItem.propTypes = {
  cour: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deleteCours: PropTypes.func.isRequired,
  showActions: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  addLike,
  removeLike,
  deleteCours,
})(CoursItem);
