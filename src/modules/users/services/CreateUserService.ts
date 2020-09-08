import 'reflect-metadata';
import { injectable, inject } from 'tsyringe';

import IUsersRepository from '../repositories/IUsersRepository';
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
  }: ICreateUserDTO): Promise<void> {
    const checkIfEmailExists = await this.usersRepository.findByEmail(email);

    if (checkIfEmailExists) {
      throw new AppError('Email address already exists', 401);
    }

    await this.usersRepository.create({
      name,
      email,
      password,
    });
  }
}

export default CreateUserService;
