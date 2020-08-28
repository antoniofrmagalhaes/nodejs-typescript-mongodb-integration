import { Router } from 'express';

import userRoutes from '../../modules/users/infra/http/routes/user.routes';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ status: 'ok' });
});

routes.use('/users', userRoutes);

export default routes;
