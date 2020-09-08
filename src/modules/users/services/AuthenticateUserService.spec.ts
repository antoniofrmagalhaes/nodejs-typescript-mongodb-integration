import TestUsersRepository from '../infra/mongoose/repositories/test/TestUsersRepository';
import TestHashProvider from '../providers/HashProvider/test/TestHashProvider';

import AuthenticateUserService from './AuthenticateUserService';
import CreateUserService from './CreateUserService';
import AppError from '../../../errors/AppError';

let userRepository: TestUsersRepository;
let createUserSerivce: CreateUserService;
let authenticateUserService: AuthenticateUserService;
let hashProvider: TestHashProvider;

describe('AuthenticateUserService', () => {
  beforeEach(() => {
    userRepository = new TestUsersRepository();
    hashProvider = new TestHashProvider();
    createUserSerivce = new CreateUserService(userRepository);
    authenticateUserService = new AuthenticateUserService(
      userRepository,
      hashProvider,
    );
  });

  it('should authenticate the user', async () => {
    await createUserSerivce.execute({
      name: 'John Doe',
      email: 'mail@test.com',
      password: '12345',
    });

    const user = await authenticateUserService.execute({
      email: 'mail@test.com',
      password: '12345',
    });

    expect(user).toHaveProperty('token');
  });

  it('should not authenticate a non existing user', async () => {
    await createUserSerivce.execute({
      name: 'John Doe',
      email: 'mail@test.com',
      password: '12345',
    });

    await expect(
      authenticateUserService.execute({
        email: 'non-existing-email@test.com',
        password: '12345',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not authenticate the user if the password is wrong', async () => {
    await createUserSerivce.execute({
      name: 'John Doe',
      email: 'mail@test.com',
      password: '12345',
    });

    await expect(
      authenticateUserService.execute({
        email: 'mail@test.com',
        password: 'wrong',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
