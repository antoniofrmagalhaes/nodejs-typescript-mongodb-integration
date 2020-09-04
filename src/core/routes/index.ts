import { Router } from 'express';

import usersRoutes from '../../modules/users/infra/http/routes/users.routes';
import productsRoutes from '../../modules/products/infra/http/routes/products.routes';
import sessionsRouter from '../../modules/users/infra/http/routes/sessions.routes';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ status: 'ok' });
});

routes.use('/sessions', sessionsRouter);
routes.use('/users', usersRoutes);
routes.use('/products', productsRoutes);

export default routes;
