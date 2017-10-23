'use strict';

const request = require('supertest');
const express = require('express');
const internalRouter = require('./../../../../src/app/routes/internal');

describe('internal routes', () => {
  const app = express();
  const config = {};

  app.use('/internal', internalRouter(config));

  describe('GET /internal/status', () => {
    it('returns a status code 200 and a message', done => {
      request(app)
        .get('/internal/status')
        .expect(200, 'Hmmh! Healthy I am!', done);
    });
  });
});
