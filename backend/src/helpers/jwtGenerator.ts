import 'dotenv/config';
import jwt from 'jsonwebtoken';
import { IToken } from '../interface/IToken';

const options = {
  expiresIn: '3d',
};

const SECRET = process.env.JWT_SECRET;

const generateToken = (data: IToken) =>
  jwt.sign({ data }, SECRET as string, options);

export default generateToken;
