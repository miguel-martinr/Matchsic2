import {Router} from 'express';
import {getLogin, postUser} from '../Controllers';
export const router = Router();


router.post('/user', postUser);
router.get('/login', getLogin);

