import { injectable, inject } from 'tsyringe';
import { Document } from 'mongoose';

import UsersRepository from '../infra/mongoose/repositories/UsersRepository';
import IUsersRepository from '../repositories/IUsersRepository';

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
  ) {}
  public async execute({ name, email, password }: Request): Promise<Document> {
    const userRepo = new UsersRepository();
    const user = await userRepo.create({ name, email, password });
    return user;
  }
}

export default CreateUserService;
