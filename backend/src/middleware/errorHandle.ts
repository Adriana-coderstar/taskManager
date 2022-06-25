import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';

const errorHandle = (
  error: ErrorRequestHandler,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  console.error(error);
  res.status(500).json({ message: 'Internal Server Error' });
};

export default errorHandle;
