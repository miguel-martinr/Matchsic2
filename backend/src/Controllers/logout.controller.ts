import {Request, Response} from 'express';
import {ActiveUserModel} from '../Data/Models/activeUsers';


export const logout = async (req: Request, res: Response) => {
  try {
    const {id} = req.body;
    res.clearCookie('access_token');
    await ActiveUserModel.deleteOne({userId: id});
    return res.status(200).json({message: 'User has been logged out'});
  } catch (error: any) {
    return res.status(400).json({message: error.message});
  }
};
