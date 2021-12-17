import {Router} from 'express';
import {postUser} from '../Controllers';
export const router = Router();


router.post('/user', postUser);
