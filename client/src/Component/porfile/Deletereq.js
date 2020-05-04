import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Deleterequest, Deletesendreq } from '../../actions/friends';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMinus } from '@fortawesome/free-solid-svg-icons';

const Deletereq = ({ id, Deleterequest, Deletesendreq }) => {
  const Delete = (e) => {
    e.preventDefault();
    Deleterequest(id);
    Deletesendreq(id);
  };

  return (
    <Fragment>
      <Button className='delteboutt' onClick={(e) => Delete(e)} color='danger'>
        <FontAwesomeIcon icon={faUserMinus} />
        Delete Request
      </Button>
    </Fragment>
  );
};

Deletereq.propTypes = {
  Deleterequest: PropTypes.func.isRequired,
  Deletesendreq: PropTypes.func.isRequired,
};

export default connect(null, {
  Deleterequest,
  Deletesendreq,
})(Deletereq);
