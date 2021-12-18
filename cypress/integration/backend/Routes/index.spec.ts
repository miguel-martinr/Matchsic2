import {config} from '../../../../backend/src/config';

/** 
 * Remember to change the mode to 'development' in the config.ts file
 * before running these tests!
 */


describe('API /user', () => {

  it('It should be able to register a new user', () => {
    const request = {
      user: {
        name: 'Vinicius Jr',
        username: 'ViniJr',
        email: 'vinijr@rmadrid.com',
        password: '123456',
      }
    };

    cy.request('POST', 'http://localhost:3000/user', request).then(res => {
      expect(res.status).to.eq(201);
      expect(res.body.message).to.eq('Welcome to Matchsic, ViniJr!');
    })
  });

  it ('An existing user should be able to login', () => {
    const request = {
      user: {
        username: 'ViniJr',
        password: '123456',
      }
    };

    cy.request('http://localhost:3000/user/login', request).then(res => {
      expect(res.status).to.eq(200);
      expect(res.headers['Set-Cookie']).to.exist;
    })
  });
});


