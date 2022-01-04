import { existingUserToken } from "../01-User/03-getLogin.spec";

describe('Geat near users', () => {
  it('It should retrieve near users as an array', () => {
    // With user logged in

    cy.request({
      method: 'GET',
      url: `/near-users`,
      headers: {
        'Cookie': `access-token=${existingUserToken}`,
      },
    })
      .then(res => {
        expect(res.status).to.eq(200);
        expect(res.body.nearUsers).to.be.an('array');
      });
  });  
});