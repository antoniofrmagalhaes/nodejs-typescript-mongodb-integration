import { injectable, inject } from 'tsyringe';

import IUsersRepository from '../repositories/IUsersRepository';

import { IUserDocument } from '../infra/mongoose/entities/schemas/User';

@injectable()
class FindUsersService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) { }

  public async execute(): Promise<IUserDocument[]> {
    const users = this.usersRepository.find();
    return users;
  }
}

export default FindUsersService;
