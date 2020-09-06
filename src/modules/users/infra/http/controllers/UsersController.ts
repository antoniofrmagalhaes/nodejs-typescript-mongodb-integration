import { Request, Response } from 'express';
import { container } from 'tsyringe';

import FindUsersService from '../../../services/FindUsersService';
import CreateUserService from '../../../services/CreateUserService';

class UsersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const findUsers = container.resolve(FindUsersService);
    const users = await findUsers.execute();
    return response.json(users);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const createUser = container.resolve(CreateUserService);
    const user = await createUser.execute(request.body);
    return response.json(user);
  }
}

export default new UsersController();
