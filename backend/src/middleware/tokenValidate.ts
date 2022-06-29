import { Request, Response, NextFunction } from 'express';
import 'dotenv/config';
import jwt from 'jsonwebtoken';

const TokenValidate = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const token = req.headers.authorization;

    if (!token) return res.status(401).json({ message: 'Token not found' });

    const SECRET = process.env.JWT_SECRET;

    const decode = jwt.verify(token as string, SECRET as string);
    req.body.tokenData = decode;
    // console.log(decode);

    next();
  } catch (error: any) {
    if (error) {
      return res.status(401).json({ message: error.message });
    }
    next(error);
  }
};

export default TokenValidate;
