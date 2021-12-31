import {Request, Response} from 'express';
import {getNearUsersService} from '../Services';

export const getNearUsers = async (req: Request, res: Response) => {
  const error = {
    statusCode: 500,
    message: 'Unknown',
  };

  try {
    const {id} = req.body;

    if (!id) {
      error.message = 'You must provide a user id';
      error.statusCode = 400;
      throw new Error();
    }

    const nearUsers = await getNearUsersService(id);
    res.status(200).json({nearUsers});
  } catch (error: any) {
    res.status(error.statusCode).json({message: error.message});
  }
};
