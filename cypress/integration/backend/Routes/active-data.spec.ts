import { ActiveUserInterface } from "../../../../backend/src/Data/Models/activeUsers";

describe('/user/active-data tests', () => {
  const activeData: ActiveUserInterface = {
    // set by server
    userId: '61bd4e30c59b1240d579b0b3', // RodrygoG
    username: 'RodrygoG',
    profileLink: 'someProfileLink',

    // sent by client
    location: { coordinates: { latitude: -23.5, longitude: -46.6 } },
    music: {
      trackName: 'The Rover',
      authorsNames: ['Led Zepellin'],
      coverImage: { url: 'https://i.scdn.co/image/ab67616d0000b273f8f9b9b9b9b9b9b9b9b9b9b9b9', width: 300, height: 300 },
      status: 'playing',
    },
  };
  it("Should post a user's activeData", () => {

    cy.request('POST', '/user/active-data', {
      activeData
    }).then(res => {
      expect(res.status).to.eq(200);
      expect(res.body.message).to.eq('Active data has been set');
    });
  });

  it('It should update a user\'s activeData', () => {
    activeData.music.trackName = 'Stairway to Heaven';
    activeData.location.coordinates = {latitude: 5, longitude: 3};

    cy.request('PATCH', '/user/active-data', { activeData
    }).then(res => {
      expect(res.status).to.eq(200);
      expect(res.body.message).to.eq('Active data has been updated');
      expect(res.body.activeData).to.deep.eq(activeData);
    });
  });
});