import { Task } from '@prisma/client';
import { ICreateTasks } from './ITask';

export interface ITaskCreate {
  create({ task, status, userId }: ICreateTasks): Promise<Task>;
}
