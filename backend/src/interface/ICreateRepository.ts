import { User } from '@prisma/client';
import { ICreate } from './IUsers';

export interface ICreateUsers {
  createUser({ id, email, password }: ICreate): Promise<User | Error>;
}
