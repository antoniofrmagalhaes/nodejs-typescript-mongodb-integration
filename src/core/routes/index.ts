import { Router } from 'express';

const route = Router();

route.get('/', (request, response) => {
  return response.json({ Status: 'ok' });
});

export default route;
