import { NextFunction, Request, Response } from 'express';
import { loginSchema } from '../schema/loginSchema';

const loginValidate = (req: Request, res: Response, next: NextFunction) => {
  const { error } = loginSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      error: error.details[0].message,
    });
  }
  return next();
};

export default loginValidate;
