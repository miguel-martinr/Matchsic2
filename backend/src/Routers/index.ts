import {Router} from 'express';
import {getLogin, postUser, getUserData} from '../Controllers';
import {authorization} from '../Middleware';
// eslint-disable-next-line max-len
import {patchActiveData, postActiveData} from '../Controllers/activeData.controller';
import {getNearUsers} from '../Controllers/getNearUsers.controller';
export const router = Router();


router.post('/user', postUser);
router.post('/login', getLogin);
router.get('/near-users', authorization, getNearUsers);
router.post('/user/active-data', authorization, postActiveData);
router.patch('/user/active-data', authorization, patchActiveData);
router.get('/user/data', authorization, getUserData);
