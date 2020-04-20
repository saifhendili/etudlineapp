import React, { useEffect, Fragment } from 'react';
import { getProfiles } from '../../actions/profile';
import { connect } from 'react-redux';
import Spinner from '../Layout/Spinner';
import User from './User';
import PropTypes from 'prop-types';

const Allprofile = ({
  getProfiles,
  profile: { profiles, loading, search },
}) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          {/* <Navbar /> */}
          <h1 className='searchforpreople'>Search For People</h1>
          {profiles.map((profile, i) => (
            <User key={profile._id} profile={profile} search={search} />
          ))}
        </Fragment>
      )}
    </Fragment>
  );
};
Allprofile.propTypes = {
  Allprofile: PropTypes.func.isRequired,
  getProfiles: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});
export default connect(mapStateToProps, { getProfiles })(Allprofile);
