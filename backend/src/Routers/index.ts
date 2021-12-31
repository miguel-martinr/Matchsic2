import {Router} from 'express';
import {getLogin, postUser} from '../Controllers';
import {postActiveData} from '../Controllers/activeData.controller';
import {getNearUsers} from '../Controllers/getNearUsers.controller';
export const router = Router();


router.post('/user', postUser);
router.get('/login', getLogin);
router.get('/near-users', getNearUsers);
router.post('/user/active-data', postActiveData);

