const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
let mongoose = require('mongoose');
const User = require('../../models/User');

//get send request friend

router.get('/getreq/:id', auth, async (req, res) => {
  try {
    const me = await User.findById(req.user.id);
    res.json(me.sentRequests);
  } catch (error) {
    console.log(error);
  }
});
//get request friend
router.get('/getreqfriend/:id', auth, async (req, res) => {
  try {
    const frienduser = await User.findById(req.params.id);
    res.json(frienduser.friendRequests);
  } catch (error) {
    console.log(error);
  }
});

//post send friend request

router.post('/sendfriendrequest/:id', auth, async (req, res) => {
  try {
    const me = await User.findById(req.user.id);
    const frienduser = await User.findById(req.params.id);
    const newRequest = {
      firstname: frienduser.firstname,
      lastname: frienduser.lastname,
      avatar: frienduser.avatar,
      user: frienduser.id,
      myuser: me.id,
    };

    me.sentRequests.unshift(newRequest);
    await me.save();
    res.json(me.sentRequests);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
module.exports = router;
//post send req
router.post('/friendrequest/:id', auth, async (req, res) => {
  try {
    const me = await User.findById(req.user.id);
    const frienduser = await User.findById(req.params.id);
    const newsentRequests = {
      firstname: me.firstname,
      lastname: me.lastname,
      avatar: me.avatar,
      user: me.id,
      myuser: frienduser.id,
    };

    frienduser.friendRequests.unshift(newsentRequests);
    await frienduser.save();
    res.json(frienduser.friendRequests);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
module.exports = router;
//delete send req
router.delete('/deletesendreq/:id', auth, async (req, res) => {
  try {
    const me = await User.findById(req.user.id);
    const frienduser = await User.findById(req.params.id);
    const deletesendreq = {
      user: frienduser.id,
    };
    me.sentRequests = me.sentRequests.filter(
      (user) => user.user !== deletesendreq.user
    );
    await me.save();

    res.json(me.sentRequests);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
module.exports = router;

router.delete('/deletereq/:id', auth, async (req, res) => {
  try {
    const me = await User.findById(req.user.id);
    const frienduser = await User.findById(req.params.id);
    // const newRequest = {
    //   user: frienduser.id,
    // };
    // me.sentRequests = me.sentRequests.filter(
    //   (user) => user.user !== newRequest.user
    // );
    const newsentRequests = {
      user: me.id,
    };
    frienduser.friendRequests = frienduser.friendRequests.filter(
      (user) => user.user !== newsentRequests.user
    );
    await frienduser.save();
    // await me.save();

    res.json(frienduser.friendRequests);
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
    await frienduser.save();
    await me.save();

    res.json(me.friends);
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
    await me.save();

    res.json(me.friendRequests);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
module.exports = router;

router.delete('/rejectsendreq/:id', auth, async (req, res) => {
  try {
    const me = await User.findById(req.user.id);
    const frienduser = await User.findById(req.params.id);
    const newsentRequests = {
      user: me.id,
    };
    frienduser.sentRequests = frienduser.sentRequests.filter(
      (user) => user.user !== newsentRequests.user
    );

    await frienduser.save();
    // await me.save();

    res.json(frienduser.sentRequests);
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

    const mynewchat = await {
      myid: me.id,
      userid: frienduser.id,
      chatid: mongoose.Types.ObjectId(),
    };
    const newchatfriend = await {
      myid: frienduser.id,
      userid: me.id,
      chatid: mynewchat.chatid,
    };
    await me.chat.unshift(mynewchat);
    await frienduser.chat.unshift(newchatfriend);
    let chatidd;

    await me.chat.map((el, i) => {
      el.userid == frienduser.id ? (chatidd = el.chatid) : null;
    });

    // let chatiduser = '';

    // await frienduser.chat.map((el, i) => {
    //   el.userid == me.id ? (chatiduser = el.chatid) : null;
    // });

    const newRequest = await {
      firstname: frienduser.firstname,
      lastname: frienduser.lastname,
      avatar: frienduser.avatar,
      user: frienduser.id,
      myuser: me.id,
      chatid: chatidd,
      isOnline: false,
    };
    const newsentRequests = await {
      firstname: me.firstname,
      lastname: me.lastname,
      avatar: me.avatar,
      user: me.id,
      myuser: frienduser.id,
      chatid: chatidd,
      isOnline: false,
    };

    await frienduser.friends.unshift(newsentRequests);
    await me.friends.unshift(newRequest);

    me.friendRequests = me.friendRequests.filter(
      (user) => user.user !== newRequest.user
    );
    frienduser.sentRequests = frienduser.sentRequests.filter(
      (user) => user.user !== newsentRequests.user
    );
    await frienduser.save();
    await me.save();

    res.json(me.friendRequests);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
module.exports = router;

router.get('/getfriends', auth, async (req, res) => {
  try {
    const me = await User.findById(req.user.id);
    res.json(me.friends);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});
module.exports = router;

router.get('/onlinefriend/', auth, async (req, res) => {
  try {
    const me = await User.findById(req.user.id);
    let online = [];
    await me.friends.map((el, i) => {
      el.isOnline === true ? online.unshift(el) : null;
    });
    res.json(online);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});
module.exports = router;
