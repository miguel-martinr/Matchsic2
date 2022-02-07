import {Request, Response} from 'express';
import {getUserDataService} from '../Services';


export const amILoggedIn = async (req: Request, res: Response) => {
  try {
    const {id} = req.body;
    if (id === undefined) throw new Error('Unknown user');
    const userData = await getUserDataService(id);
    return res.status(200).json({
      amILoggedIn: true,
      userData,
    });
  } catch (error: any) {
    return res.status(403).json({
      amILoggedIn: false,
      reaosn: error.message || error,
    });
  }
};
