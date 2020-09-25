import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getallposts } from '../../actions/admin';
import Posts from './Posts';
const ManagePosts = ({ admin: { posts }, getallposts }) => {
  useEffect(() => {
    getallposts();
  }, []);
  return (
    <div className='userscontainer'>
      {posts.map((el, i) => (
        <Posts key={i} post={el} />
      ))}
    </div>
  );
};

ManagePosts.propTypes = {
  getallposts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  admin: state.admin,
});
export default connect(mapStateToProps, { getallposts })(ManagePosts);
