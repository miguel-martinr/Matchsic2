import {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';

declare module 'jsonwebtoken' {
    export interface UserIDJwtPayload extends jwt.JwtPayload {
        userId: string,
    }
}


export const authorization = (
    req :Request, res :Response, next :NextFunction,
) => {
  const jwtToken = req.cookies.access_token;
  if (!jwtToken) {
    res.status(403);
    res.json({message: 'Empty Token'});
    return;
  }
  try {
    const {id} = jwt.verify(jwtToken,
        process.env.JWT_SECRET as string) as jwt.UserIDJwtPayload;
    req.body.id = id;
    return next();
  } catch {
    res.status(403);
    res.json({message: 'Invalid Token'});
  }
};
