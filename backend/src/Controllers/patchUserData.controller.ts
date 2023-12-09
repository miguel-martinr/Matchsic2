import {Request, Response} from 'express';
import {patchUserDataService} from '../Services';



export const patchUserData = async (req: Request, res: Response) => {
  try {
    const {id} = req.body;
    const infoUser = await patchUserDataService(id, req.body.user);
    return res.status(202).json(infoUser);
  } catch (error: any) {
    return res.status(400).json({message: error.message});
  }
};
