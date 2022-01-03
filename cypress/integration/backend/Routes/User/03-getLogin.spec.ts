describe('Get stuff from users', () => {
  it('An existing user should be able to login', () => {
    const request = {
      user: {
        username: 'ViniJr',
        password: '123456',
      }
    };

    return cy.request('/login', request).then(res => {
      expect(res.status).to.eq(200);
      expect(res.headers['set-cookie']).to.exist;
    });
  });

  // it('It should retrieve near users as an array', () => {
  //   // With user logged in
  //   cy.request('/near-users', {id: '61bd4e30c59b1240d579b0b3'})
  //     .then(res => {
  //       expect(res.status).to.eq(200);
  //       expect(res.body.nearUsers).to.be.an('array');
  //     });
  // });  
});