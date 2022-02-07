import {Request, Response} from 'express';


export const amILoggedIn = async (req: Request, res: Response) => {
  try {
    return res.status(200).json({
      amILoggedIn: true,
      
    })
  } catch (error: any) {
    return res.status(400).json({message: error.message});
  }
};
