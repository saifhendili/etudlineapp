import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import EncadrementItem from './EncadrementItem';
// import PostForm from './PostForm';
import { getEncadrements } from '../../actions/encadrement';
import Spinner from '../Layout/Spinner';
// import Modal from './Addencadrementmodal';
import { Button } from 'reactstrap';
const AddEncadrement = ({
  getEncadrements,
  encadrement: { Encadrements, loading },
  auth,
}) => {
  useEffect(() => {
    getEncadrements();
  }, [getEncadrements]);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <p className='lead'>Encadrement</p>
          {/* <PostForm className='create-post' /> */}
          {auth.user.typeuser == 'Instructor' ? (
            <Link to='/addencadrement'>
              {' '}
              <Button color='primary'> Add Encadrement</Button>
            </Link>
          ) : null}

          {/* <Modal /> */}
          <div className='CardBody'>
            {Encadrements.map((encadrement) => (
              <EncadrementItem
                key={encadrement._id}
                encadrement={encadrement}
              />
            ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

AddEncadrement.propTypes = {
  getEncadrements: PropTypes.func.isRequired,
  //   post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  encadrement: state.encadrement,
  auth: state.auth,
});

export default connect(mapStateToProps, { getEncadrements })(
  withRouter(AddEncadrement)
);
