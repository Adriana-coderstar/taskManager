import { Task } from '@prisma/client';
import { ICreateTasks, IFindTasks } from './ITask';

export interface ITaskCreate {
  create({ id, task, status, userId }: ICreateTasks): Promise<Task>;
  findAll({ userId }: IFindTasks): Promise<Task[]>;
  updateTask({ id, task, status }: ICreateTasks): Promise<Task>;
  delete(id: string): Promise<Task>;
}
