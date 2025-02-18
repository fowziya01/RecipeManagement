// routes/recipe.js
const express = require('express');
const multer = require('multer');
const cloudinary = require('../cloudinary');
const Recipe = require('../models/Recipe');
const User = require('../models/User');
const router = express.Router();
// multer setup
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/tmp/my-uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.originalname + '-' + uniqueSuffix)
    }
  })
  
  const upload = multer({ storage: storage })