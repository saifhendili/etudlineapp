import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap';
import {
  faThumbsUp,
  faThumbsDown,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import {
  deleteEncadrement,
  addEncadrement,
  getEncadrement,
} from '../../actions/encadrement';

const EncadrementItem = ({
  auth,
  encadrement: {
    _id,
    EnseignantId,
    firstnameEnseignant,
    lastnameEnseignant,
    firstnameEtudiant,
    lastnameEtudiant,
    date,
  },
}) => (
  <Card>
    <CardBody>
      <CardTitle>Science d'encadrement:</CardTitle>
      <CardSubtitle>
        (Mme Ms){firstnameEnseignant} {lastnameEnseignant}
      </CardSubtitle>
      <CardText>Encadrer</CardText>
      <CardSubtitle>
        (Mme Ms){firstnameEtudiant} {lastnameEtudiant}
      </CardSubtitle>
      <CardText>le {date}</CardText>
      <Button>Button</Button>
    </CardBody>
  </Card>
);

// PostItem.defaultProps = {
//   showActions: true,
// };

EncadrementItem.propTypes = {
  encadrement: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(EncadrementItem);
