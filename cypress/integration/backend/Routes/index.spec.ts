import {authorization} from '../../../../backend/src/Middleware';
import {Request, Response, NextFunction} from 'express';

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
          'access-token': ""
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
          'access-token': "1234"
      }
    }
      authorization(mockRequest as Request, mockResponse as Response, nextFunction);

      expect(mockResponse.json).to.be.calledWith(Cypress.sinon.match(expectedResponse));
  });


});


