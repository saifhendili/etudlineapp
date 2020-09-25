const express = require('express');
const connectDB = require('./config/db');
const http = require('http');

const socketio = require('socket.io');
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
    console.log(user.Online + '21');
    if (user.Online) {
      await user.friends.map((el, i) => {
        el.chatid === room ? (el.isOnline = true) : null;
      });
      socket.join(room);
      await user.friends.map((el, i) => {
        el.chatid === room
          ? socket.broadcast.to(room).emit('online', {
              user: `${el.user}`,
              firstname: `${el.firstname}`,
              lastname: `${el.lastname}`,
              isOnline: true,
              chatid: room,
              myuser: el.myuser,
            })
          : null;
      });
    } else {
      user.friends.map((el) => {
        el.chatid === myroom ? (el.isOnline = false) : null;
      });
      socket.join(myroom);

      await user.friends.map((el, i) => {
        el.chatid === myroom
          ? socket.broadcast.to(myroom).emit('online', {
              user: `${el.user}`,
              firstname: `${el.firstname}`,
              lastname: `${el.lastname}`,
              isOnline: false,
              chatid: myroom,
              myuser: el.myuser,
            })
          : null;
      });
    }

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
        ? socket.broadcast.to(myroom).emit('online', {
            user: `${el.user}`,
            firstname: `${el.firstname}`,
            lastname: `${el.lastname}`,
            isOnline: false,
            chatid: myroom,
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
app.use('/api/authadmin', require('./routes/api/authadmin'));
app.use('/api/encadrement', require('./routes/api/encadrement'));
app.use('/api/Cours', require('./routes/api/Cours'));

server.listen(process.env.PORT || 5000, () =>
  console.log(`Server has started on.`)
);
