'use strict';
const express = require('express');
const morgan = require('morgan');
const createRouter = require('./app/routes');
const config = require('./app/core/config');
const createLogger = require('./app/core/logger');

const app = express();
const router = createRouter(config);
const logger = createLogger(module);

// todo: only use Morgan for dev?
app.use(morgan('dev'));
app.use('/', router);

try {
  app.listen(config.get('port'), () => {
    logger.info(`Started on port ${config.get('port')}`);
  });
}
catch (err) {
  logger.error('Failed to start app. Error:', err);
}

process.on('uncaughtException', err => {
  const errorMsg = 'Uncaught exception';
  logger.error(errorMsg, err);
  exitProcess(errorMsg);
});

process.on('SIGINT', () => {
  exitProcess('SIGINT received');
});

function exitProcess(msg) {
  logger.error('Shutting down app: ', msg);
  process.exit(1);
}
