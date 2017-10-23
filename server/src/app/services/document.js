'use strict';
const fs = require('fs');
const Promise = require('bluebird');

module.exports = createDocumentService;

// todo: what are we going to log?

function createDocumentService(rootPath, createLogger) {
  const logger = createLogger(module);

  return {
    getFoldersList
  };

  function getFoldersList() {
    return new Promise((resolve, reject) => {
      fs.readdir(rootPath, 'utf8', (err, files) => {
        if (err) {
          reject(err);  // todo: think about the rv here for sad paths
        }
        resolve(files);
      });
    });
  }
}

