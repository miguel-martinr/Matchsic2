describe ('Spotify credentials tests', () => {
  it('Should have default spotify credentials when a new user is added', () => {
    const defaultSpotifyCredentials = {          
      accessToken: '',
      refreshToken: '',
      expirationTime: 0, // Expired by default          
  };
    cy.findOne({username: 'ViniJr'}, 'users').then((user: any) => {
      expect(user.spotifyCredentials).to.deep.eq(defaultSpotifyCredentials);
    });
  });
});
