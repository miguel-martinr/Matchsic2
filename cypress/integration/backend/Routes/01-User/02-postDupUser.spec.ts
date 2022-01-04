describe('Posting duplicated users', () => {
  it('If username is already taken it should return a non-ok status', () => {
    const request = {
      user: {
        name: 'Some One Bis',
        username: 'ViniJr', // Username already taken
        email: 'someonebis@rmadrid.com',
        password: '123456',
      }
    };

    return cy.request({
      method: 'POST',
      url: '/user',
      body: request,
      failOnStatusCode: false,
    }).then(res => {
      expect(res.status).to.not.equal(200);
      // TODO: Check if the error message is the same as the one in the backend
    });
  });
});