import { activeData } from ".";
import { ActiveUserInterface } from "../../../../../backend/src/Data/Models/activeUsers";

describe('/user/active-data tests', () => {
  it("Should post a user's activeData", () => {

    cy.request('POST', '/user/active-data', {
      activeData
    }).then(res => {
      expect(res.status).to.eq(200);
      expect(res.body.message).to.eq('Active data has been set');
    });
  });

});