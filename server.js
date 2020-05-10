const connectDB = require('./config/db');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
// const { getuser } = require('./middleware/chat');
const cors = require('cors');
const User = require('./models/User');

const app = express();

const server = http.createServer(app);
var io = socketio(server);

app.use(cors());
io.on('connection', (socket) => {
  console.log('connecter');
  let myfriendid;
  let myroom;

  socket.on('Online', async ({ friendid, room }, callback) => {
    const user = await User.findById(friendid);
    myfriendid = friendid;
    myroom = room;
    await user.friends.map((el, i) => {
      el.chatid === room ? (el.isOnline = true) : null;
    });
    socket.join(room);
    await user.friends.map((el, i) => {
      el.chatid === room
        ? socket.broadcast.to(room).emit('message', {
            user: `${el.user}`,
            firstname: `${el.firstname}`,
            lastname: `${el.lastname}`,
            isOnline: true,
            room: room,
            myuser: el.myuser,
          })
        : null;
    });

    user.save();
  });

  socket.on('disconnect', async () => {
    const user = await User.findById(myfriendid);

    user.friends.map((el) => {
      el.chatid === myroom ? (el.isOnline = false) : null;
    });
    socket.join(myroom);

    await user.friends.map((el, i) => {
      el.chatid === myroom
        ? socket.broadcast.to(myroom).emit('message', {
            user: `${el.user}`,
            firstname: `${el.firstname}`,
            lastname: `${el.lastname}`,
            isOnline: false,
            room: myrooms,
            myuser: el.myuser,
          })
        : null;
    });

    user.save();
  });
});
io.on('connection', (socket) => {
  console.log('con');

  socket.on('join', async ({ name, room }, callback) => {
    console.log('sockets connection ' + name + room);
    const user = await User.findById(name);
    console.log(user.firstname);
    socket.join(room);
    socket.emit('message', {
      user: 'admin',
      text: `${user.firstname}, welcome to room .`,
    });
  });
  socket.on('sendMessage', async ({ message, name, room }, callback) => {
    const user = await User.findById(name);
    let userfriend;
    const newmessage = await {
      sender: user.firstname,
      text: message,
      avatar: user.avatar,
      myid: name,
      room: room,
    };
    await user.chat.map((el, i) => {
      {
        el.chatid === room ? el.messages.push(newmessage) : null;
      }
      el.chatid === room ? (userfriend = el.userid) : null;
    });
    const friend = await User.findById(userfriend);
    await friend.chat.map((el, i) => {
      el.chatid === room ? el.messages.push(newmessage) : null;
    });

    await user.save();
    await friend.save();
    io.to(room).emit('message', {
      user: user.firstname,
      text: message,
      avatar: user.avatar,
      myid: name,
      room: room,
    });

    callback();
  });
});
//Connect Database
connectDB();
// //Init Middlew:are

app.use(express.json({ extended: false }));
app.get('/', (req, res) => res.send('API Running'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/friends', require('./routes/api/friends'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/chat', require('./routes/api/chat'));

server.listen(process.env.PORT || 5000, () =>
  console.log(`Server has started on.`)
);
