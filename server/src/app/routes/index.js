'use strict';

const express = require('express');
const createInternalRouter = require('./internal');

module.exports = (config) => {
  const router = express.Router();

  router.use('/internal', createInternalRouter(config));

  return router;
};
