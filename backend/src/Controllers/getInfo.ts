import {Request, Response} from 'express';
import {getUserInfo} from '../Services';

import dotenv from 'dotenv';

dotenv.config({path: '../.env'});

export const getInfo = async (req: Request, res: Response) => {
  try {
    const {id} = req.body;
    const infoUser = await getUserInfo(id);
    return res.status(202).json(infoUser);
  } catch (error: any) {
    return res.status(400).json({message: error.message});
  }
};
