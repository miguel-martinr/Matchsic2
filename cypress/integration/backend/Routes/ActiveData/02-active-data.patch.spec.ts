import { activeData } from ".";

it('It should update a user\'s activeData', () => {
  activeData.music.trackName = 'Stairway to Heaven';
  activeData.location.coordinates = {latitude: 5, longitude: 3};
  const {userId, ...expectedActiveData} = activeData;

  const activeDataUpdate = { activeData: {
    userId: activeData.userId,
    music: activeData.music,
    location: activeData.location,
  }};

  cy.request('PATCH', '/user/active-data', activeDataUpdate).then(res => {
    expect(res.status).to.eq(200);
    expect(res.body.message).to.eq('Active data has been updated');
    expect(res.body.activeData).to.deep.eq(expectedActiveData);
  });
});