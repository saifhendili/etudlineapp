const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const Post = require('../../models/Post');

const Cours = require('../../models/Cours');
const User = require('../../models/User');

// @route    POST api/posts
// @desc     Create a post
// @access   Private
router.post(
  '/',
  [
    auth,
    [
      check('password', 'Password is required').not().isEmpty(),
      check('title', 'Title is required').not().isEmpty(),
      check('text', 'text is required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select('-password');

      const newCours = new Cours({
        text: req.body.text,
        password: req.body.password,
        title: req.body.title,

        firstname: user.firstname,
        lastname: user.lastname,
        avatar: user.avatar,
        user: req.user.id,
      });

      const cours = await newCours.save();

      res.json(cours);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    GET api/posts
// @desc     Get all posts
// @access   Private
router.get('/', auth, async (req, res) => {
  try {
    const cours = await Cours.find().sort({ date: -1 });
    res.json(cours);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/posts/:id
// @desc     Get post by ID
// @access   Private
router.get('/:id', auth, async (req, res) => {
  try {
    const cours = await Cours.findById(req.params.id);

    // Check for ObjectId format and post
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !cours) {
      return res.status(404).json({ msg: 'Cours not found' });
    }

    res.json(cours);
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});

// @route    DELETE api/posts/:id
// @desc     Delete a post
// @access   Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const cours = await Cours.findById(req.params.id);

    // Check for ObjectId format and post
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !cours) {
      return res.status(404).json({ msg: 'cours not found' });
    }

    // Check user
    if (cours.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    await cours.remove();

    res.json({ msg: 'cours removed' });
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});

// @route    PUT api/posts/like/:id
// @desc     Like a post
// @access   Private
router.put('/like/:id', auth, async (req, res) => {
  try {
    const cours = await Cours.findById(req.params.id);

    // Check if the post has already been liked
    if (
      cours.likes.filter((like) => like.user.toString() === req.user.id)
        .length > 0
    ) {
      return res.status(400).json({ msg: 'Post already liked' });
    }

    cours.likes.unshift({ user: req.user.id });

    await cours.save();

    res.json(cours.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    PUT api/posts/unlike/:id
// @desc     Unlike a post
// @access   Private
router.put('/unlike/:id', auth, async (req, res) => {
  try {
    const cours = await Cours.findById(req.params.id);

    // Check if the post has already been liked
    if (
      cours.likes.filter((like) => like.user.toString() === req.user.id)
        .length === 0
    ) {
      return res.status(400).json({ msg: 'Post has not yet been liked' });
    }

    // Get remove index
    const removeIndex = cours.likes
      .map((like) => like.user.toString())
      .indexOf(req.user.id);

    cours.likes.splice(removeIndex, 1);

    await cours.save();

    res.json(cours.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    POST api/posts/comment/:id
// @desc     Comment on a post
// @access   Private
router.post(
  '/comment/:id',
  [auth, [check('text', 'Text is required').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select('-password');
      const cours = await Cours.findById(req.params.id);

      const newComment = {
        text: req.body.text,
        firstname: user.firstname,
        lastname: user.lastname,
        avatar: user.avatar,
        user: req.user.id,
      };

      cours.comments.unshift(newComment);

      await cours.save();

      res.json(cours.comments);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    DELETE api/posts/comment/:id/:comment_id
// @desc     Delete comment
// @access   Private
router.delete('/comment/:id/:comment_id', auth, async (req, res) => {
  try {
    const cours = await Cours.findById(req.params.id);

    // Pull out comment
    const comment = cours.comments.find(
      (comment) => comment.id === req.params.comment_id
    );
    // Make sure comment exists
    if (!comment) {
      return res.status(404).json({ msg: 'Comment does not exist' });
    }
    // Check user
    if (comment.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    cours.comments = cours.comments.filter(
      ({ id }) => id !== req.params.comment_id
    );

    await cours.save();

    return res.json(cours.comments);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send('Server Error');
  }
});

module.exports = router;
