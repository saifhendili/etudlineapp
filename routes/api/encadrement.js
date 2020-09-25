const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
let mongoose = require('mongoose');
const User = require('../../models/User');
const Encadrement = require('../../models/Encadrement');

//get send request friend

router.post('/:id', auth, async (req, res) => {
  try {
    const Enseignant = await User.findById(req.user.id);
    const Etudiant = await User.findById(req.params.id);
    const newEncadrement = new Encadrement({
      EnseignantId: Enseignant.id,
      EtudiantId: Etudiant.id,
      firstnameEnseignant: Enseignant.firstname,
      lastnameEnseignant: Enseignant.lastname,
      firstnameEtudiant: Etudiant.firstname,
      lastnameEtudiant: Etudiant.lastname,
      date: req.body.date,
    });
    const encad = await newEncadrement.save();

    res.json(encad);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.put('/:id', auth, async (req, res) => {
  try {
    const encadrement = await Encadrement.findById(req.params.id);
    if (encadrement) {
      encadrement.date = req.body.date;

      const updatedEncadrement = await encadrement.save();
      res.json(updatedEncadrement);
    }
  } catch (error) {
    console.log(error);
  }
});
//get encadrement
router.get('/:id', auth, async (req, res) => {
  try {
    const encadrement = await Encadrement.findById(req.params.id);
    res.json(encadrement);
  } catch (error) {
    console.log(error);
  }
});

router.get('/', auth, async (req, res) => {
  try {
    const encadrement = await Encadrement.find();
    res.json(encadrement);
  } catch (error) {
    console.log(error);
  }
});
//post send friend request

router.delete('/:id', async (req, res) => {
  const encadrement = await Encadrement.findById(req.params.id);
  if (encadrement) {
    await encadrement.remove();
    res.send({ message: 'encadrement supprimer' });
  } else {
    res.send('erreur lors de la suppression');
  }
});

module.exports = router;
