'use strict';

const convict = require('convict');

const config = getConfig();

module.exports = config;

function getConfig() {
  return convict({
    env: {
      doc: 'The environment we are running in',
      format: ['live', 'dev'],
      env: 'ENV_NAME',
      default: 'dev'
    },
    componentName: {
      doc: 'Application name to use in logging',
      format: String,
      env: 'COMPONENT_NAME',
      default: 'document-viewer'
    },
    port: {
      doc: 'Port for starting the application on',
      format: 'port',
      env: 'PORT',
      default: 8080
    },
    logLevel: {
      doc: 'Logging level',
      format: ['debug', 'info', 'warn', 'error'],
      env: 'LOG_LEVEL',
      default: 'debug'
    }
  });
}
