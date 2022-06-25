import { Request, Response, NextFunction } from 'express';
import CreateLoginService from '../service/Login/CreateLoginService';

class CreateController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;

      const newUser = await CreateLoginService.createUser({
        email,
        password,
      });

      if (newUser instanceof Error)
        return res.status(400).json({ error: newUser.message });

      return res.status(201).json(newUser);
    } catch (error) {
      return next(error);
    }
  }
}

export default new CreateController();
