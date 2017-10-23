'use strict';

const express = require('express');

// todo: retrofit logging
// todo: maybe log the config out in an endpoint
module.exports = (config) => {
  const router = express.Router();

  router.get('/status', (req, res) => {
    res.status(200).send('Hmmh! Healthy I am!');
  });

  return router;
};

