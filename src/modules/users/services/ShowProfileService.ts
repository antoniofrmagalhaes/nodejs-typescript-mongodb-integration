import 'reflect-metadata';
import { injectable, inject } from 'tsyringe';

import IUsersRepository from '../repositories/IUsersRepository';
import { IUserDocument } from '../infra/mongoose/entities/schemas/User';
import AppError from '../../../errors/AppError';

interface IRequest {
  user_id: string;
}

@injectable()
class ShowProfileService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}
  public async execute({
    user_id,
  }: IRequest): Promise<IUserDocument | undefined> {
    const profile = await this.usersRepository.findById(user_id);
    if (!profile) throw new AppError('User not found', 404);
    return profile;
  }
}

export default ShowProfileService;
