import { container } from 'tsyringe';

import IUsersRepository from '../modules/users/repositories/IUsersRepository';
import UsersRepository from '../modules/users/infra/mongoose/repositories/UsersRepository';

import IProductsRepository from '../modules/products/repositories/IProductsRepository';
import ProductsRepository from '../modules/products/infra/mongoose/repositories/ProductsRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IProductsRepository>(
  'ProductsRepository',
  ProductsRepository,
);
