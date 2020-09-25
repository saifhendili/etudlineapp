import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getallusers } from '../../actions/admin';
import Allusers from './Allusers';
const ManageUsers = ({ admin: { users }, getallusers }) => {
  useEffect(() => {
    getallusers();
  }, []);
  return (
    <div className='userscontainer'>
      {users.map((el, i) => (
        <Allusers key={i} user={el} />
      ))}
    </div>
  );
};

ManageUsers.propTypes = {
  getallusers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  admin: state.admin,
});
export default connect(mapStateToProps, { getallusers })(ManageUsers);
