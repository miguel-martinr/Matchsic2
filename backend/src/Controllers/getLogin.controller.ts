import {Request, Response} from 'express';
import jwt from 'jsonwebtoken';
import {verifyUserService} from '../Services';

import dotenv from 'dotenv';

dotenv.config({path: '../.env'});

export const getLogin = async (req: Request, res: Response) => {
  try {
    res.clearCookie('access_token');
    const {user} = req.body;
    console.log(req.body);
    if (!user) throw new Error('Empty JSON');
    const existingUser = await verifyUserService(user);

    if (!existingUser) throw new Error('User not found');


    // eslint-disable-next-line max-len
    const token = jwt.sign({id: existingUser._id}, process.env.JWT_SECRET as string, {
      expiresIn: '30m',
    });
    return res
        .cookie('access_token', token, {
          httpOnly: true,
        })
        .status(200)
        .json({message: `Welcome back to Matchsic, ${existingUser.username}!`});
  } catch (error: any) {
    return res.status(400).json({message: error.message});
  }
};
