import { injectable, inject } from 'tsyringe';
import { Document } from 'mongoose';

import IUsersRepository from '../repositories/IUsersRepository';
import { IUserDocument } from '../infra/mongoose/entities/schemas/User';

interface Request {
  name: string;
  email: string;
  password: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) { }

  public async execute(request: Request): Promise<IUserDocument> {
    const user = await this.usersRepository.create(request);

    return user;
  }
}

export default CreateUserService;
