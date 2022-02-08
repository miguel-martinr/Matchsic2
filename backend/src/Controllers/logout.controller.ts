import {Request, Response} from 'express';
import {ActiveUserModel} from '../Data/Models/activeUsers';


export const logout = async (req: Request, res: Response) => {
  try {
    const {id} = req.body;
    res.cookie('access-token', '', {
      expires: new Date(0),
      httpOnly: true,
    });

    await ActiveUserModel.deleteOne({userId: id});
    return res.status(200).json({message: 'User has been logged out'});
  } catch (error: any) {
    return res.status(400).json({message: error.message});
  }
};
