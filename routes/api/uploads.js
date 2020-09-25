const express = require('express');
const router = express.Router();

// import multer and the AvatarStorage engine
const _ = require('lodash');
const path = require('path');
const multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../public/uploads'));
  },
  filename(req, file = {}, cb) {
    const { originalname } = file;
    const fileExtension = (originalname.match(/\.+[\S]+$/) || [])[0];
    cb(null, `${file.fieldname}__${Date.now()}${fileExtension}`);
  },
});

var upload = multer({ storage: storage, limits: { fileSize: 1000000 } });

router.post('/', upload.single('file'), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any

  let host = req.headers.origin;
  if (process.env.NODE_ENV == 'production') {
    host = 'http://localhost:5000';
  }

  res.send({ ...req.file, url: `/uploads/${req.file.filename}` });
});

module.exports = router;
