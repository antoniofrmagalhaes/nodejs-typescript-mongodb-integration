import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUserService from '../../../services/CreateUserService';
import ShowProfileService from '../../../services/ShowProfileService';

class UsersController {
  public async show(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const showUser = container.resolve(ShowProfileService);
    const profile = await showUser.execute({
      user_id,
    });
    return response.json(profile);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const createUser = container.resolve(CreateUserService);
    await createUser.execute(request.body);
    return response.json({
      status: 'success',
      message: 'user created successfully',
    });
  }
}

export default new UsersController();
