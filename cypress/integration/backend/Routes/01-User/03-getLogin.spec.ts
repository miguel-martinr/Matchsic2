export let existingUserToken: string = 'prueba';

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
      
      let cookie = existingUserCookie.split('=')[1];
      cookie = cookie.slice(0, cookie.indexOf(';'));
      existingUserToken = cookie; // To be used in next tests

      const payloadBuffer = Buffer.from(cookie.split('.')[1], 'base64');
      const decodedPayloadJson = payloadBuffer.toString('ascii');
      const payload = JSON.parse(decodedPayloadJson);

      expect(payload).to.have.property('id');
      expect(payload.id).to.be.a('string');

    });
  });
});