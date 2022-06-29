import { NextFunction, Request, Response } from 'express';
import TaskService from '../../service/Task/TaskService';

class TaskController {
  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {
        task,
        status,
        tokenData: {
          data: { id: userId },
        },
      } = req.body;

      const newTask = await TaskService.create({ task, status, userId });

      return res.status(201).json(newTask);
    } catch (error) {
      console.log(error);

      return next(error);
    }
  };
}

export default new TaskController();
