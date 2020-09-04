import { Request, Response } from 'express';
import { container } from 'tsyringe';

import AuthenticateUserService from '../../../services/AuthenticateUserService';

class SessionsController {
  public async create(request: Request, response: Response) {
    const { email, password } = request.body;

    const authenticate = container.resolve(AuthenticateUserService);

    const user = await authenticate.execute({
      email,
      password,
    });

    return response.json(user);
  }
}

export default new SessionsController();
