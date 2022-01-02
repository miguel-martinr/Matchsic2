import { config } from '../../../../backend/src/config';
import {authorization} from '../../../../backend/src/Controllers'
import {Request, Response, NextFunction} from 'express';
import dotenv from 'dotenv';
dotenv.config({path: '../.env'});

/** 
 * Remember to change the mode to 'development' in the config.ts file
 * before running these tests!
 */

describe('API /user', () => {
  
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let nextFunction = () => {};

  before(() => {
    mockResponse = {
        json: cy.spy().as('json'),
        status: cy.spy().as('status'),
    };

  })


  it('Authorization send empty token with no access_token', () => {
    const expectedResponse = {
      "message": "Empty Token"
    };
    mockRequest = {
      cookies: {
          access_token: ""
      }
  }
      authorization(mockRequest as Request, mockResponse as Response, nextFunction);

      expect(mockResponse.json).to.be.calledWith(Cypress.sinon.match(expectedResponse));
  });

  it('Authorization send Invalid token with wrong access_token', () => {
    const expectedResponse = {
      "message": "Invalid Token"
    };
    mockRequest = {
      cookies: {
          access_token: "1234"
      }
    }
      authorization(mockRequest as Request, mockResponse as Response, nextFunction);

      expect(mockResponse.json).to.be.calledWith(Cypress.sinon.match(expectedResponse));
  });

  it('It should be able to register a new user', () => {

    const request = {
      user: {
        name: 'Vinicius Jr',
        username: 'ViniJr',
        email: 'vinijr@rmadrid.com',
        password: '123456',
      }
    };

    return cy.request('POST', 'http://localhost:3000/user', request).then(res => {
      expect(res.status).to.eq(201);
      expect(res.body.message).to.eq('Welcome to Matchsic, ViniJr!');
    });
  });


  it('If email is already taken it should return a non-ok status', () => {
    const request = {
      user: {
        name: 'Some One',
        username: 'Someone',
        email: 'vinijr@rmadrid.com',
        password: '123456',
      }
    };

    return cy.request({
      method: 'POST',
      url: 'http://localhost:3000/user',
      body: request,
      failOnStatusCode: false,
    }).then(res => {
      expect(res.status).to.not.equal(201);
      // TODO: Check if the error message is the same as the one in the backend
    });
  });

  it('If username is already taken it should return a non-ok status', () => {
    const request = {
      user: {
        name: 'Some One Bis',
        username: 'RodrygoG',
        email: 'someonebis@rmadrid.com',
        password: '123456',
      }
    };

    return cy.request({
      method: 'POST',
      url: 'http://localhost:3000/user',
      body: request,
      failOnStatusCode: false,
    }).then(res => {
      expect(res.status).to.not.equal(201);
      // TODO: Check if the error message is the same as the one in the backend
    });
  });


  it('An existing user should be able to login', () => {
    const request = {
      user: {
        username: 'RodrygoG',
        password: '123456',
      }
    };

    return cy.request('http://localhost:3000/login', request).then(res => {
      expect(res.status).to.eq(200);
      expect(res.headers['set-cookie']).to.exist;
    });
  });


});


