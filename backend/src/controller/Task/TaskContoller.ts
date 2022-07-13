import { NextFunction, Request, Response } from 'express';
import TaskService from '../../service/Task/TaskService';

class TaskController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { task, status } = req.body;

      const { id } = req.params;
      const userId = Number(id);

      const newTask = await TaskService.create({ task, status, userId });

      return res.status(201).json(newTask);
    } catch (error) {
      console.log(error);
      return next(error);
    }
  }

  async find(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = Number(req.body.tokenData.data.id);

      const findTask = await TaskService.findAll({ userId });
      return res.status(200).json(findTask);
    } catch (error) {
      console.log(error);
      return next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id, task, status } = req.body;

      const updateTask = await TaskService.updateTask({ id, status, task });

      return res.status(200).json(updateTask);
    } catch (error) {
      console.log(error);
      return next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      await TaskService.delete(id);

      return res.status(200).json({ message: 'Task deleted' });
    } catch (error) {
      console.log(error);
      return next(error);
    }
  }
}

export default new TaskController();
