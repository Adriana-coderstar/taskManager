import { NextFunction, Request, Response } from 'express';
import LoginService from '../../service/Login/LoginService';

class LoginController {
  async find(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;

      const userData = await LoginService.findUser({
        email,
        password,
      });

      if (userData instanceof Error)
        return res.status(401).json({ error: userData.message });

      return res.status(200).json(userData);
    } catch (error) {
      console.log(error);

      return next(error);
    }
  }
}

export default new LoginController();
