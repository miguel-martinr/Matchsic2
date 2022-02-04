import {SpotifyWebApi} from 'spotify-web-api-ts';
import {SpotifyCredentials, UserModel} from '../Data/Models/user';

// eslint-disable-next-line max-len
const getNewSpotifyCredentials = async (code: string): Promise<SpotifyCredentials> => {
  const spotify = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    redirectUri: process.env.SPOTIFY_REDIRECT_URI,
  });

  const refreshableTokenResponse = await spotify.getRefreshableUserTokens(code);
  const {access_token: accessToken,
    refresh_token: refreshToken,
    expires_in: expiresIn} = refreshableTokenResponse;

  return {
    accessToken,
    refreshToken,
    expirationTime: Date.now() + expiresIn * 1000,
  };
};


// eslint-disable-next-line max-len
const refreshAndUpdateToken = async (userId: string, refreshToken: string): Promise<string> => {
  const spotify = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    redirectUri: process.env.SPOTIFY_REDIRECT_URI,
  });


  // eslint-disable-next-line max-len
  const refreshedTokenResponse = await spotify.getRefreshedAccessToken(refreshToken);
  const {access_token: accessToken,
    expires_in: expiresIn} = refreshedTokenResponse;

  UserModel.findByIdAndUpdate(userId, {
    spotifyCredentials: {
      accessToken,
      expirationTime: Date.now() + expiresIn * 1000,
      refreshToken,
    },
  });

  return accessToken;
};

export const spotifyService = {
  getNewSpotifyCredentials,
  refreshAndUpdateToken,
};
