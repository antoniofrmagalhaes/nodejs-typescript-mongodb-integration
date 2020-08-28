import { Request, Response } from 'express';
import User from '../../mongoose/entities/schemas/User';

import CreateUserService from '../../../services/CreateUserService';
import { container } from 'tsyringe';

class UsersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const users = await User.find();
    return response.json(users);
  }
  public async create(request: Request, response: Response): Promise<Response> {
    const createUser = container.resolve(CreateUserService);
    const user = await createUser.execute(request.body);
    return response.json(user);
  }
}

export default new UsersController();
