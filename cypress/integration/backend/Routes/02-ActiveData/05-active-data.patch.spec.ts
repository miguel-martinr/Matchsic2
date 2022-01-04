import { activeData } from ".";
import { ActiveUserInterface } from "../../../../../backend/src/Data/Models/activeUsers";
import { existingUserToken } from "../01-User/03-getLogin.spec";

const expectedActiveData = activeData as ActiveUserInterface;

describe('PATCH /user/active-data tests', () => {
  it('It should update a user\'s activeData', () => {
    expectedActiveData.music.trackName = 'Stairway to Heaven';
    expectedActiveData.location.coordinates = {latitude: 5, longitude: 3};
    
    const activeDataUpdate = { 
      music: expectedActiveData.music,
      location: expectedActiveData.location,
    };
  
    cy.request({
      method: 'PATCH',
      url: '/user/active-data', 
      headers: {
        'Cookie': `access-token=${existingUserToken}`,
      },
      body: {activeData: activeDataUpdate},
    }).then(res => {
      expect(res.status).to.eq(200);
      expect(res.body.message).to.eq('Active data has been updated');
      expect(res.body.activeData).to.deep.eq(expectedActiveData);
    });
  });
});