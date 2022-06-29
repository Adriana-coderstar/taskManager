import { Task, User } from '@prisma/client';
import { prismaClient } from '../../database/prismaClient';
import { ICreateTasks } from '../../interface/ITask';
import { ITaskCreate } from '../../interface/ITaskRepository';

class TaskService implements ITaskCreate {
  async create({ task, status, userId }: ICreateTasks): Promise<Task> {
    const newTask = await prismaClient.task.create({
      data: {
        task,
        status,
        users: {
          connect: {
            id: Number(userId),
          },
        },
      },
    });

    return newTask;
  }
}

export default new TaskService();
