import {Router} from 'express';
import {getLogin, postUser, getInfo} from '../Controllers';
import {authorization} from '../Middleware';
// eslint-disable-next-line max-len
import {patchActiveData, postActiveData} from '../Controllers/activeData.controller';
import {getNearUsers} from '../Controllers/getNearUsers.controller';
export const router = Router();


router.post('/user', postUser);
router.post('/login', getLogin);
router.get('/near-users', getNearUsers);
router.post('/user/active-data', postActiveData);
router.patch('/user/active-data', patchActiveData);
router.get('/user/data', authorization, getInfo);
