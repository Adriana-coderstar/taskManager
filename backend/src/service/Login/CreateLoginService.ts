import md5 from 'md5';
import { User } from '@prisma/client';
import { ICreate } from '../../interface/IUsers';
import { prismaClient } from '../../database/prismaClient';
import { ICreateUsers } from '../../interface/ICreateRepository';

class CreateLoginService implements ICreateUsers {
  async createUser({ email, password }: ICreate): Promise<User | Error> {
    const checkEmail = await prismaClient.user.findUnique({
      where: {
        email,
      },
    });

    if (checkEmail) return new Error('Email already exists');

    const user = await prismaClient.user.create({
      data: {
        email,
        password: md5(password),
      },
    });

    const newUser = {
      id: user.id,
      email: user.email,
      password: user.password,
    };
    return newUser;
  }
}

export default new CreateLoginService();
