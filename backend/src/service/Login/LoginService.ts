import md5 from 'md5';
import { User } from '@prisma/client';
import { ILogin } from '../../interface/IUsers';
import { ILoginUsers } from '../../interface/ILoginRepository';
import { prismaClient } from '../../database/prismaClient';
import generateToken from '../../helpers/jwtGenerator';

class LoginService implements ILoginUsers {
  async findUser({ email, password }: ILogin): Promise<User | Error> {
    const secretPass = md5(password);

    const checkUser = await prismaClient.user.findUnique({
      where: { email },
    });

    if (!checkUser || checkUser.password !== secretPass)
      return new Error('Incorrect email or password');

    const token = generateToken({
      id: checkUser.id.toString(),
      email: checkUser.email,
    });

    const userData = {
      id: checkUser.id,
      email: checkUser.email,
      password: checkUser.password,
      token: token,
    };

    return userData;
  }
}

export default new LoginService();
