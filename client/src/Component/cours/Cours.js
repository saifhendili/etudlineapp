import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
// import PostItem from './PostItem';
import CoursItem from './CoursItem';
import { getCours } from '../../actions/Cours';
import Spinner from '../Layout/Spinner';
import CoursForm from './CoursForm';

const Cours = ({ auth, getCours, cours: { cours, loading } }) => {
  useEffect(() => {
    getCours();
  }, [getCours]);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <p className='lead'>Welcome in your cours</p>
          {auth.user.typeuser == 'Instructor' ? (
            <CoursForm className='create-post' />
          ) : null}

          <div className='posts'>
            {cours.map((cour) => (
              <CoursItem key={cour._id} cour={cour} />
            ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Cours.propTypes = {
  getCours: PropTypes.func.isRequired,
  cours: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  cours: state.cours,
  auth: state.auth,
});

export default connect(mapStateToProps, { getCours })(withRouter(Cours));
