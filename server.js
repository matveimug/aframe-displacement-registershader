const browserify = require('browserify-middleware');
const express = require('express');

const app = express()
  .use('/js', browserify(__dirname + '/client'))
  .use(express.static(__dirname + '/public'))
  .listen(process.env.PORT);
