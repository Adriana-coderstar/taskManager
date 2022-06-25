import md5 from 'md5';
import { User } from '@prisma/client';
import { ICreate } from '../../interface/IUsers';
import { prismaClient } from '../../database/prismaClient';
import { ICreateUsers } from '../../interface/ICreateRepository';
import generateToken from '../../helpers/jwtGenerator';

class CreateLoginService implements ICreateUsers {
  async createUser({ email, password }: ICreate): Promise<User | any> {
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

    const token = generateToken({
      id: user.id.toString(),
      email: user.email,
    });

    const newUser = {
      id: user.id,
      email: user.email,
      token,
    };

    return newUser;
  }
}

export default new CreateLoginService();
