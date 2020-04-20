const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const Post = require('../../models/Post');
const User = require('../../models/User');

// @route    GET api/posts
// @desc     Get all posts
// @access   Private
router.post('/sendfriendrequest/:id', auth, async (req, res) => {
  try {
    const me = await User.findById(req.user.id);
    const frienduser = await User.findById(req.params.id);
    const newRequest = {
      firstname: frienduser.firstname,
      lastname: frienduser.lastname,
      avatar: frienduser.avatar,
      user: frienduser.id,
    };

    me.sentRequests.unshift(newRequest);
    // res.json(frienduser);

    // const newsentRequests = {
    //   firstname: me.firstname,
    //   lastname: me.lastname,
    //   avatar: me.avatar,
    //   user: me.id,
    // };

    // frienduser.friendRequests.unshift(newsentRequests);
    // await frienduser.save();
    await me.save();

    res.json(me);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
module.exports = router;

router.post('/friendrequest/:id', auth, async (req, res) => {
  try {
    const me = await User.findById(req.user.id);
    const frienduser = await User.findById(req.params.id);
    //   const newRequest = {
    //     firstname: frienduser.firstname,
    //     lastname: frienduser.lastname,
    //     avatar: frienduser.avatar,
    //     user: frienduser.id,
    //   };

    //   me.sentRequests.unshift(newRequest);
    // res.json(frienduser);

    const newsentRequests = {
      firstname: me.firstname,
      lastname: me.lastname,
      avatar: me.avatar,
      user: me.id,
    };

    frienduser.friendRequests.unshift(newsentRequests);
    await frienduser.save();
    //   await me.save();

    res.json(me);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
module.exports = router;

router.delete('/deletesendreq/:id', auth, async (req, res) => {
  try {
    const me = await User.findById(req.user.id);
    const frienduser = await User.findById(req.params.id);
    const newRequest = {
      user: frienduser.id,
    };
    me.sentRequests = me.sentRequests.filter(
      (user) => user.user !== newRequest.user
    );
    const newsentRequests = {
      user: me.id,
    };
    frienduser.friendRequests = frienduser.friendRequests.filter(
      (user) => user.user !== newsentRequests.user
    );
    // frienduser.friendRequests.unshift(newsentRequests.user);
    await frienduser.save();
    await me.save();

    res.json(me);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
module.exports = router;

router.post('/acceptfriend/:id', auth, async (req, res) => {
  try {
    const me = await User.findById(req.user.id);
    const frienduser = await User.findById(req.params.id);

    const newRequest = {
      firstname: frienduser.firstname,
      lastname: frienduser.lastname,
      avatar: frienduser.avatar,
      user: frienduser.id,
    };
    const newsentRequests = {
      firstname: me.firstname,
      lastname: me.lastname,
      avatar: me.avatar,
      user: me.id,
    };

    frienduser.friends.unshift(newsentRequests);
    me.friends.unshift(newRequest);

    me.friendRequests = me.friendRequests.filter(
      (user) => user.user !== newRequest.user
    );
    frienduser.sentRequests = frienduser.sentRequests.filter(
      (user) => user.user !== newsentRequests.user
    );
    // frienduser.friendRequests.unshift(newsentRequests.user);
    await frienduser.save();
    await me.save();

    res.json(me);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
module.exports = router;

router.delete('/deletefriend/:id', auth, async (req, res) => {
  try {
    const me = await User.findById(req.user.id);
    const frienduser = await User.findById(req.params.id);
    const newRequest = {
      user: frienduser.id,
    };
    const newsentRequests = {
      user: me.id,
    };

    me.friends = me.friends.filter((user) => user.user !== newRequest.user);

    frienduser.friends = frienduser.friends.filter(
      (user) => user.user !== newsentRequests.user
    );
    // frienduser.friendRequests.unshift(newsentRequests.user);
    await frienduser.save();
    await me.save();

    res.json(me);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
module.exports = router;

router.delete('/rejectreq/:id', auth, async (req, res) => {
  try {
    const me = await User.findById(req.user.id);
    const frienduser = await User.findById(req.params.id);
    const newRequest = {
      user: frienduser.id,
    };
    me.friendRequests = me.friendRequests.filter(
      (user) => user.user !== newRequest.user
    );
    const newsentRequests = {
      user: me.id,
    };
    frienduser.sentRequests = frienduser.sentRequests.filter(
      (user) => user.user !== newsentRequests.user
    );

    // frienduser.friendRequests.unshift(newsentRequests.user);
    await frienduser.save();
    await me.save();

    res.json(me);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
module.exports = router;
