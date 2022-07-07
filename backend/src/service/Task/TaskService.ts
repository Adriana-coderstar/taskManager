import { Task } from '@prisma/client';
import { prismaClient } from '../../database/prismaClient';
import { ICreateTasks, IFindTasks } from '../../interface/ITask';
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
  async findAll({ userId }: IFindTasks): Promise<Task[]> {
    return await prismaClient.task.findMany({
      where: { userId },
    });
  }

  async updateTask({ id, task, status }: ICreateTasks): Promise<Task> {
    const upTask = await prismaClient.task.update({
      where: { id: Number(id) },
      data: {
        task: task,
        status: status,
      },
    });
    return upTask;
  }

  async delete(id: string): Promise<Task> {
    const delTask = await prismaClient.task.delete({
      where: { id: Number(id) },
    });
    return delTask;
  }
}

export default new TaskService();
