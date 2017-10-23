'use strict';

/*
* what this service needs to do
* 1. list folders under a root folder
* 2. open a file with a given name and return the contents
*
* */

/*
* root folder not found
* no files in folder
* topline file not found
* empty files? Is this a responsibility here? return an error code?
* or leave it to the caller
* exceptions thrown by file system
*
* consider having /happy and /sad folder trees under /testdata
* think about rootPath and passing paths to methods
* - what are we trying to achieve with rootPath?
* - maybe we use rootpath in the service and pass in the folder/file to the methods & concatenate
* */

require('must/register');
const createDocumentService = require('./../../../src/app/services/document');

function fakeLogger() {
  return moduleName => ({
    error() {},
    warn() {},
    info() {},
    debug() {}
  });
}

describe('document service', () => {
  const rootPath = `${process.env.PWD}/server/test/integration/testdata`;
  const documentService = createDocumentService(rootPath, fakeLogger());

  it('lists the folders in the root folder specified', () => {
    const expectedResult = ['2017_01', '2017_02'];

    return documentService.getFoldersList()
      .then(res => res.must.eql(expectedResult));
  });
});
