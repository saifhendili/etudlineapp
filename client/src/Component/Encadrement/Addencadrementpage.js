import React, { Fragment, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Spinner from '../Layout/Spinner';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Etudients from './Etudients';
import { GetFriends } from '../../actions/friends';

const Addencadrementpage = ({
  profile: { profile, loading },
  auth: { user },
  GetFriends,
  friends: { friends },
}) => {
  useEffect(() => {
    GetFriends();
  }, [GetFriends]);

  return (
    <Fragment>
      {profile === null || loading ? (
        <Fragment>
          <Spinner />
          <Redirect to='/create-profile' />
        </Fragment>
      ) : (
        <Fragment>
          <header className='header '>
            <section className='allbuttonprofile'>
              <Fragment>
                <div className='friendbox buttposition'>
                  <Etudients friends={friends} />
                </div>
              </Fragment>
            </section>
          </header>
        </Fragment>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
  friends: state.friends,
});
Addencadrementpage.propTypes = {
  // getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  GetFriends: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
  // getProfileById
  GetFriends,
})(Addencadrementpage);
