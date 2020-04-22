import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Deleterequest, Deletesendreq } from '../../actions/friends';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
const Deletereq = ({ id, Deleterequest, Deletesendreq }) => {
  const Delete = (e) => {
    e.preventDefault();
    Deleterequest(id);
    Deletesendreq(id);
  };

  return (
    <Fragment>
      <Link to={`/profiles/${id}`}>
        <button onClick={(e) => Delete(e)}>Delete Request</button>
      </Link>
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
