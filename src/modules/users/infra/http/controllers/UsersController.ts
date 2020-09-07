import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUserService from '../../../services/CreateUserService';

class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const createUser = container.resolve(CreateUserService);
    const user = await createUser.execute(request.body);
    return response.json(user);
  }
}

export default new UsersController();
