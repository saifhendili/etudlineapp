import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Moment from 'react-moment';
import { deleteComment } from '../../actions/Cours';

const CommentItem = ({
  coursId,
  comment: { _id, text, firstname, lastname, avatar, user, date },
  auth,
  deleteComment,
}) => (
  <div className='post'>
    <div className='infopost'>
      <div className='delete-ppost'>
        <Link className='post-icon' to={`/profile/${user}`}>
          <img className='squard-img' src={avatar} alt='' />
          <h4 className='name-post'>
            {firstname} {lastname}
          </h4>
        </Link>
        {!auth.loading && user === auth.user._id && (
          <button
            onClick={() => deleteComment(coursId, _id)}
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
    <div>
      <p className='my-1'>{text}</p>
    </div>
  </div>
);

CommentItem.propTypes = {
    coursId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
