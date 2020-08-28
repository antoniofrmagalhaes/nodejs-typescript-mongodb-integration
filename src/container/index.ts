import { container } from 'tsyringe';

import IUsersRepository from '../modules/users/repositories/IUsersRepository';
import UsersRepository from '../modules/users/infra/mongoose/repositories/UsersRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
