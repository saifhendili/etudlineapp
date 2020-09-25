const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EncadrementSchema = new Schema({
  EnseignantId: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  EtudiantId: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  firstnameEnseignant: {
    type: String,
  },
  lastnameEnseignant: {
    type: String,
  },
  firstnameEtudiant: {
    type: String,
  },
  lastnameEtudiant: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Encadrement = mongoose.model('Encadrement', EncadrementSchema);
