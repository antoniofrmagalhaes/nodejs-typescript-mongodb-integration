import TestUsersRepository from '../infra/mongoose/repositories/test/TestUsersRepository';
import CreateUserService from './CreateUserService';
import AppError from '../../../errors/AppError';

let testUsersRepository: TestUsersRepository;
let createUserService: CreateUserService;

describe('CreateUserService', () => {
  beforeEach(() => {
    testUsersRepository = new TestUsersRepository();
    createUserService = new CreateUserService(testUsersRepository);
  });

  it('shoud create a new user', async () => {
    const user = await createUserService.execute({
      name: 'John Doe',
      email: 'mail@test.com',
      password: '12345',
    });
    expect(user).toHaveProperty('id');
  });

  it('shoud not create a new user using an existing email address', async () => {
    await createUserService.execute({
      name: 'John Doe',
      email: 'mail@test.com',
      password: '12345',
    });

    await expect(
      createUserService.execute({
        name: 'John Doe',
        email: 'mail@test.com',
        password: '12345',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
