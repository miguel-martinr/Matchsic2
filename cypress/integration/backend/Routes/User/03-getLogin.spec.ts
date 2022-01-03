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
      const existingUserCookie = res.headers['set-cookie'][0] as string;
      expect(existingUserCookie).to.be.a('string');
      let token = existingUserCookie.split(';')[1];
      
    });
  });
});