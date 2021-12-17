import {registerUserService} from '../Services';
import {Request, Response, NextFunction} from 'express';

// eslint-disable-next-line max-len
export const postUser = async (req: Request, res: Response, next: NextFunction) => {
  const {user} = req.body;
  try {
    await registerUserService(user);
    res.sendStatus(201); // User created
    next();
  } catch (error: any) {
    const errorMessage = error.message || 'unknown';
    console.log(`Error while posting user: ${errorMessage}`);
    res.sendStatus(500); // Internal server error
    next(error);
  }
};
