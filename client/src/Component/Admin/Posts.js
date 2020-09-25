import React from 'react';
import { Button } from 'reactstrap';
import { deleteposts } from '../../actions/admin';
import { connect } from 'react-redux';

const Posts = ({ post, deleteposts }) => {
  const deletepost = (e) => {
    e.preventDefault();
    deleteposts(post._id);
  };
  return (
    <div>
      <div className='getinformationuser'>
        <img src={post.avatar} alt='avatar' className='avataruser' />
        <h3>
          {post.firstname} {post.lastname}
        </h3>
      </div>
      <p className='typeuserinadmin'>ID:{post._id}</p>
      <p className='useridinadmin'>{post.text}</p>
      <Button onClick={(e) => deletepost(e)} color='danger deleteuser'>
        danger
      </Button>{' '}
    </div>
  );
};

export default connect(null, { deleteposts })(Posts);
