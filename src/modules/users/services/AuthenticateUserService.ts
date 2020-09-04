import { sign } from 'jsonwebtoken';
import { injectable, inject } from 'tsyringe';

import authConfig from '../../../config/AuthConfig';

import IUsersRepository from '../../users/repositories/IUsersRepository';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';
import { IUserDocument } from '../infra/mongoose/entities/schemas/User';

interface Request {
  email: string;
  password: string;
}

interface Response {
  user: IUserDocument;
  token: string;
}

@injectable()
class AuthenticateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}
  public async execute({ email, password }: Request): Promise<Response> {
    const user = await this.usersRepository.findByEmailWithPassword(email);

    if (!user) {
      throw new Error('Incorrect email/password.');
    }

    const passwordMatchs = await this.hashProvider.compareHash(
      password,
      user.password,
    );

    if (!passwordMatchs) {
      throw new Error('Incorrect email/password.');
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn: expiresIn,
    });

    return {
      user,
      token,
    };
  }
}

export default AuthenticateUserService;
