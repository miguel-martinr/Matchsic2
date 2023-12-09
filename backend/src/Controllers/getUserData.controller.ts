import {Request, Response} from 'express';
import {getUserDataService} from '../Services';



export const getUserData = async (req: Request, res: Response) => {
  try {
    const {id} = req.body;
    const infoUser = await getUserDataService(id);
    return res.status(202).json(infoUser);
  } catch (error: any) {
    return res.status(400).json({message: error.message});
  }
};
