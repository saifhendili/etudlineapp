import React from 'react';
import { Button } from 'reactstrap';
import { deleteusers } from '../../actions/admin';
import { connect } from 'react-redux';

const Allusers = ({ user, deleteusers }) => {
  const deleteuser = (e) => {
    e.preventDefault();
    deleteusers(user._id);
  };
  return (
    <div>
      <div className='getinformationuser'>
        <img src={user.avatar} alt='avatar' className='avataruser' />
        <h3>
          {user.firstname} {user.lastname}
        </h3>
      </div>
      <p className='typeuserinadmin'>{user.typeuser}</p>
      <p className='useridinadmin'>ID:{user._id}</p>
      <Button onClick={(e) => deleteuser(e)} color='danger deleteuser'>
        danger
      </Button>{' '}
    </div>
  );
};

export default connect(null, { deleteusers })(Allusers);
