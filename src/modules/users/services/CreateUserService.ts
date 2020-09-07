import 'reflect-metadata';
import { injectable, inject } from 'tsyringe';

import IUsersRepository from '../repositories/IUsersRepository';
import { IUserDocument } from '../infra/mongoose/entities/schemas/User';
import ICreateUserDTO from '../DTO/ICreateUserDTO';
import AppError from '../../../errors/AppError';

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({
    name,
    email,
    password,
  }: ICreateUserDTO): Promise<IUserDocument> {
    const checkIfEmailExists = await this.usersRepository.findByEmailWithPassword(
      email,
    );

    if (checkIfEmailExists) {
      throw new AppError('Email address already exists', 401);
    }

    const user = await this.usersRepository.create({
      name,
      email,
      password,
    });

    return user;
  }
}

export default CreateUserService;
