'use strict';
const fs = require('fs');
const Promise = require('bluebird');
Promise.promisifyAll(fs);

// todo: remove the PromisifyAll and write our own promise wrappers for file system

module.exports = createDocumentService;

function createDocumentService(rootPath, createLogger) {
  const logger = createLogger(module);

  return {
    getFolderList
  };

  function getFolderList() {
    return fs.readdirAsync(rootPath, 'utf8')
      .tap(res => logger.info('Folder list requested: ', res));
  }
}
