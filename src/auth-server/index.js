'use strict';

require('dotenv').config();
const mongoose = require('mongoose');

const server = require('./src/server.js');
const MONGODB_URI = process.env.MONGODB_URI;

const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}

mongoose.connect(MONGODB_URI, mongooseOptions)
  .then(() => {
    server.start(3333);
  })