import { activeData } from ".";
import { existingUserToken } from "../01-User/03-getLogin.spec";


describe('/user/active-data tests', () => {

  it("Should post a user's activeData", () => {

    cy.intercept('POST', '/user/active-data').as('post.activeData');

    cy.request({
      method: "POST",
      url: "/user/active-data",
      headers: {
        'Cookie': `access-token=${existingUserToken}`,
      },
      body: { activeData },
    }).then(res => {
      expect(res.status).to.eq(200);
      expect(res.body.message).to.eq('Active data has been set');
    });
  });
});

