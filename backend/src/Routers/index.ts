import {Router} from 'express';
import {getLogin, postUser, authorization, getInfo} from '../Controllers';
export const router = Router();


router.post('/user', postUser);
router.get('/login', getLogin);
router.get('/user/data', authorization, getInfo);
