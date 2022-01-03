import {Request, Response} from 'express';

import dotenv from 'dotenv';

dotenv.config({path: '../.env'});

export const getInfo = async (req: Request, res: Response) => {
  try {
    const {id} = req.body;
    // const existingUser = await verifyUserService(user);
    return res.status(200).json({message: 'Your id is ' + id});
  } catch (error: any) {
    return res.status(400).json({message: error.message});
  }
};
