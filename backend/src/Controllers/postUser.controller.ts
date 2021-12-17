import {registerUserService} from '../Services';
import {Request, Response, NextFunction} from 'express';

// eslint-disable-next-line max-len
export const postUser = async (req: Request, res: Response, next: NextFunction) => {
  const {user} = req.body;
  try {
    const createdUser = await registerUserService(user);

    res.status(201).send({
      message: `Welcome to Matchsic, ${createdUser.username}!`,
    }); // User created
    next();
  } catch (error: any) {
    const errorMessage = error.message || 'unknown';
    console.log(`Error while posting user: ${errorMessage}`);
    res.sendStatus(500); // Internal server error
    next(error);
  }
};
