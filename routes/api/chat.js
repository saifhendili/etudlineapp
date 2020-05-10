const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
let mongoose = require('mongoose');
const User = require('../../models/User');

router.get('/getroom/:id', auth, async (req, res) => {
  try {
    const me = await User.findById(req.user.id);
    const myfriend = await User.findById(req.params.id);
    let chatid;
    me.chat.map((el) => {
      el.userid == myfriend.id ? (chatid = el) : null;
    });
    res.json(chatid);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});
module.exports = router;
router.get('/getmessages/:id', auth, async (req, res) => {
  try {
    const me = await User.findById(req.user.id);
    const myfriend = await User.findById(req.params.id);
    let messages;
    me.chat.map((el) => {
      el.userid == myfriend.id ? (messages = el.messages) : null;
    });
    res.json(messages);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});
module.exports = router;

// router.get('/addmessages/:id', auth, async (req, res) => {
//   try {
//     const me = await User.findById(req.user.id);
//     const myfriend = await User.findById(req.params.id);
//     let messages;
//     me.chat.map((el) => {
//       el.userid == myfriend.id ? (messages = el.messages) : null;
//     });
//     res.json(messages);
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send('Server Error');
//   }
// });
// module.exports = router;
