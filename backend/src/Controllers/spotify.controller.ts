import {Request, Response} from 'express';

// eslint-disable-next-line max-len
import {AuthorizationScope} from 'spotify-web-api-ts/types/types/SpotifyAuthorization';

import {db} from '../Data/DB';
import {UserModel} from '../Data/Models';
import {spotifyService} from '../Services';
import { config } from '../config';


export const spotifyConnect = async (req: Request, res: Response) => {
  try {
    const userData = await db.user.getData(req.body.id);
    const {spotifyCredentials} = userData;

    if (spotifyCredentials.expirationTime > Date.now()) {
      // Token is still valid
      return res.redirect('/');
    }

    // Token is expired

    if (!spotifyCredentials.refreshToken) {
      // There's no refresh token, so we need to redirect the user to Spotify
      return redirectToSpotifyCallback(res, ['user-read-currently-playing']);
    }

    // There's a refresh token, so we can refresh the token

    // eslint-disable-next-line max-len
    await spotifyService.refreshAndUpdateToken(req.body.id, spotifyCredentials.refreshToken);
    return res.redirect('/');
  } catch (error: any) {
    return res.status(400).json({
      isSpotifyConnected: false,
      reason: error.message + ` ${req.body.id}`,
    });
  }
};
export const spotifyCallback = async (req: Request, res: Response) => {
  try {
    const {code} = req.query;
    // eslint-disable-next-line max-len
    const spotifyCredentials = await spotifyService.getNewSpotifyCredentials(code as string);
    await UserModel.findByIdAndUpdate(req.body.id, {spotifyCredentials});
    return res.redirect('/');
  } catch (error: any) {
    return res.status(400).json({message: error.message});
  }
};


// eslint-disable-next-line max-len
const redirectToSpotifyCallback = async (res: Response, scopes: AuthorizationScope[]) => {
  const redirectUri = config.env.SPOTIFY_REDIRECT_URI || '';
  return res.redirect('https://accounts.spotify.com/authorize' +
    '?response_type=code' +
    '&client_id=' + config.env.SPOTIFY_CLIENT_ID +
    '&scope=' + encodeURIComponent(scopes.join(' ')) +
    '&redirect_uri=' + encodeURIComponent(redirectUri),
  );
};
