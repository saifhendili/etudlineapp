const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

// // const Admin = require('../../models/Admin');
const User = require('../../models/User');
const Post = require('../../models/Post');
const Profile = require('../../models/Profile');

// // @route    GET api/auth
// // @desc     Get user by token
// // @access   Private
// // router.get('/', auth, async (req, res) => {
// //   try {
// //     const admin = await User.findById(req.user.id).select('-passwordAdmin');
// //     res.json(admin);
// //   } catch (err) {
// //     console.error(err.message);
// //     res.status(500).send('Server Error');
// //   }
// // });

// // router.post(
// //   '/login',
// //   [
// //     check('email', 'Please include a valid email').isEmail(),
// //     check('passwordAdmin', 'Password is required').exists(),
// //   ],
// //   async (req, res) => {
// //     const errors = validationResult(req);
// //     if (!errors.isEmpty()) {
// //       return res.status(400).json({ errors: errors.array() });
// //     }

// //     const { email, passwordAdmin } = req.body;

// //     try {
// //       let admin = await User.findOne({ email });
// //       if (!admin) {
// //         return res
// //           .status(500)
// //           .json({ errors: [{ msg: 'Invalid Credentials' }] });
// //       }

// //       const isMatch = await bcrypt.compare(passwordAdmin, admin.passwordAdmin);

// //       if (!isMatch) {
// //         return res
// //           .status(400)
// //           .json({ errors: [{ msg: 'Invalid Credentials' }] });
// //       }

// //       const payload = {
// //         admin: {
// //           id: admin.id,
// //         },
// //       };

// //       jwt.sign(
// //         payload,
// //         config.get('jwtSecret'),
// //         // { expiresIn: 36000000 },
// //         (err, token) => {
// //           if (err) throw err;
// //           res.json({ token });
// //         }
// //       );
// //     } catch (err) {
// //       console.error(err.message);
// //       res.status(500).send('Server error');
// //     }
// //   }
// // );

// // router.post(
// //   '/',
// //   [
// //     check('firstname', 'firstname is required').not().isEmpty(),
// //     check('lastname', 'lastname is required').not().isEmpty(),
// //     check('type', 'type is required').not().isEmpty(),

// //     check('email', 'Please include a valid email').isEmail(),
// //     check(
// //       'passwordAdmin',
// //       'Please enter a password with 6 or more characters'
// //     ).isLength({ min: 4 }),
// //   ],
// //   async (req, res) => {
// //     const errors = validationResult(req);
// //     if (!errors.isEmpty()) {
// //       return res.status(400).json({ errors: errors.array() });
// // }
// //     const { email, firstname, lastname, type, passwordAdmin } = req.body;
// //     try {
// //       let admin = await Admin.findOne({ email });
// //       if (admin) {
// //         return res
// //           .status(400)
// //           .json({ errors: [{ msg: 'Useral ready exists' }] });
// //       }

// //       admin = new Admin({
// //         firstname,
// //         lastname,
// //         email,
// //         type,
// //         passwordAdmin,
// //       });
// //       const salt = await bcrypt.genSalt(10);

// //       admin.passwordAdmin = await bcrypt.hash(passwordAdmin, salt);
// //       await admin.save();
// //       const payload = {
// //         admin: {
// //           id: admin.id,
// //         },
// //       };

// //       jwt.sign(
// //         payload,
// //         config.get('jwtSecret'),
// //         { expiresIn: 360000 },
// //         (err, token) => {
// //           if (err) throw err;
// //           res.json({ token });
// //         }
// //       );
// //     } catch (err) {
// //       console.error(err.message);
// //       res.status(500).send('Server error');
// //     }
// //   }
// // );

router.get('/getallusers', auth, async (req, res) => {
  try {
    const user = await User.find().sort({ date: -1 });
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.delete('/deleteuser/:id', auth, async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    const profile = await Profile.findOneAndRemove({ user: req.params.id });
    const post = await Post.findOneAndRemove({ user: req.params.id });
    const myuser = await User.findByIdAndDelete(req.user.id);
    // myuser.friends.filter((el) => el.user !== req.params.id);
    const all = await User.find();
    res.json(all);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
module.exports = router;

router.get('/getallposts', auth, async (req, res) => {
  try {
    const post = await Post.find().sort({ date: -1 });
    res.json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.delete('/deletepost/:id', auth, async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    const all = await Post.find();
    res.json(all);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
module.exports = router;
