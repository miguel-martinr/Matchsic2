
import {SpotifyWebApi} from 'spotify-web-api-ts';
// eslint-disable-next-line max-len
import {CurrentlyPlaying, Track} from 'spotify-web-api-ts/types/types/SpotifyObjects';
import {SpotifyCredentials, UserModel} from '../Data/Models/user';
import {MusicData} from '../types/music';
import {Image} from '../types/util';
import { config } from '../config';

// eslint-disable-next-line max-len
const getNewSpotifyCredentials = async (code: string): Promise<SpotifyCredentials> => {
  const spotify = new SpotifyWebApi({
    clientId: config.env.SPOTIFY_CLIENT_ID,
    clientSecret: config.env.SPOTIFY_CLIENT_SECRET,
    redirectUri: config.env.SPOTIFY_REDIRECT_URI,
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
    clientId: config.env.SPOTIFY_CLIENT_ID,
    clientSecret: config.env.SPOTIFY_CLIENT_SECRET,
    redirectUri: config.env.SPOTIFY_REDIRECT_URI,
  });


  // eslint-disable-next-line max-len
  const refreshedTokenResponse = await spotify.getRefreshedAccessToken(refreshToken);
  const {access_token: accessToken,
    expires_in: expiresIn} = refreshedTokenResponse;

  await UserModel.findByIdAndUpdate(userId, {
    spotifyCredentials: {
      accessToken,
      expirationTime: Date.now() + expiresIn * 1000,
      refreshToken,
    },
  });

  return accessToken;
};

const getCurrentlyPlaying = async (accessToken: string) => {
  const spotify = new SpotifyWebApi({
    accessToken,
  });

  let currentlyPlaying = await spotify.player.getCurrentlyPlayingTrack();

  if (typeof currentlyPlaying === 'string') return null;

  if (!currentlyPlaying.item) return null;

  const response: MusicData = {
    authorsNames: [],
    coverImage: {url: '', width: 0, height: 0},
    status: 'stopped',
    trackName: 'Unknown',
  };

  const defaultImage = 'https://imagenes.elpais.com/resizer/H5Nn0FsAAGyJ1GSMHxHG9GxmXNY=/1200x0/ep01.epimg.net/elpais/imagenes/2016/05/31/ciencia/1464687786_596536_1464698347_noticia_fotograma.jpg';
  currentlyPlaying = currentlyPlaying as CurrentlyPlaying;
  switch (currentlyPlaying.currently_playing_type) {
    case 'track':
      // eslint-disable-next-line max-len
      const {name, album: {images}, artists} = currentlyPlaying.item as Track;
      response.trackName = name;
      response.authorsNames = artists.map(({name}) => name);
      response.coverImage = images[0] as Image;
      response.status = currentlyPlaying.is_playing ? 'playing' : 'paused';
      break;
    default:
      response.trackName = 'Some nice unknown';
      // eslint-disable-next-line max-len
      response.coverImage = {url: defaultImage, width: 0, height: 0};
      response.authorsNames = ['Some nice unknown artist'];
      response.status = currentlyPlaying.is_playing ? 'playing' : 'paused';
  }
  return response;
};

export const spotifyService = {
  getNewSpotifyCredentials,
  refreshAndUpdateToken,
  getCurrentlyPlaying,
};

