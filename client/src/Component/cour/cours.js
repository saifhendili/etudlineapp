import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Spinner from '../Layout/Spinner';
import CoursItem from '../cour/AfficherCours';
import Commetform from '../cour/Commetform';
import CommentItem from '../cour/CommentItem';
import { getCour } from '../../actions/Cours';
import queryString from 'query-string';

const Cours = ({ getCour, cours: { cour, loading }, location }) => {
  const { id } = queryString.parse(location.search);

  useEffect(() => {
    getCour(id);
  }, [getCour, id]);

  return loading || cour === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <Link to='/cours' className='btn'>
        Back To Posts
      </Link>
      <CoursItem cour={cour} showActions={true} />
      <Commetform coursId={cour._id} />
      <div className='comments'>
        {cour.comments.map((comment) => (
          <CommentItem key={comment._id} comment={comment} courId={cour._id} />
        ))}
      </div>
    </Fragment>
  );
};

Cours.propTypes = {
  getCour: PropTypes.func.isRequired,
  cours: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  cours: state.cours,
});

export default connect(mapStateToProps, { getCour })(Cours);
