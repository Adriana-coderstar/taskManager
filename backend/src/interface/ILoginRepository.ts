import { User } from '@prisma/client';
import { ILogin } from './IUsers';

export interface ILoginUsers {
  findUser({ email, password }: ILogin): Promise<User | Error>;
}
