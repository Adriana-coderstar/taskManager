import { User } from '@prisma/client';
import { ICreate } from './IUsers';

export interface ICreateUsers {
  createUser({ email, password }: ICreate): Promise<User | null>;
}
