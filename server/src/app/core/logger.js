'use strict';
const simpleNodeLogger = require('simple-node-logger');
const config = require('./config');

module.exports = createLogger;

function createLogger(module) {
  const moduleName = getModuleName(module);
  const env = config.get('env');

  if (env === 'dev') {
    console.info(`[${moduleName}] Dev environment detected: logging to CONSOLE`);
    console.debug = console.log.bind(console);
  }

  // todo: log to file system for Live
  return simpleNodeLogger.createSimpleLogger();

  // const logLevel = config.get('logLevel');
  // const componentName = config.get('componentName');
  //
  // return createConsoleLogger(logLevel, componentName, env, moduleName);
}

function getModuleName(module) {
  if (module != null && typeof module !== 'string') {
    const parts = module.filename.split('/');
    return `${parts[parts.length -2]}/${parts[parts.length -1]}`;
  }
  return 'n/a';
}
