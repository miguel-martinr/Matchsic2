import {Router} from 'express';
import {getLogin,
  postUser,
  getUserData,
  patchActiveData,
  postActiveData,
  getNearUsers,
  spotifyCallback,
  spotifyConnect,
  patchUserData,
  amILoggedIn} from '../Controllers';
import {authorization} from '../Middleware';

export const router = Router();
router.post('/user', postUser);
router.post('/login', getLogin);
router.get('/near-users', authorization, getNearUsers);
router.post('/user/active-data', authorization, postActiveData);
router.patch('/user/active-data', authorization, patchActiveData);
router.get('/user/data', authorization, getUserData);
router.patch('/user/data', authorization, patchUserData);
router.get('/music/login', authorization, spotifyConnect);
router.get('/spotify-callback', authorization, spotifyCallback);
router.get('/am-i-logged-in', authorization, amILoggedIn);

