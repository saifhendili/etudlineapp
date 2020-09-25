import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
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
            <button
              onClick={() => deleteCours(_id)}
              type='button'
              className='btn-danger btn-delete'
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
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

            <Link to={`/coursdetails?id=${_id}`} className='btn-comments'>
              Comment{' '}
              {comments.length > 0 && (
                <span className='comment-count'>{comments.length}</span>
              )} */}
        {/* </Link>
          </div>
        )} */}
      </div>
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
