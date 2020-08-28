import { Router } from 'express';
import UsersController from '../controllers/UsersController';

const usersRouter = Router();

usersRouter.get('/', UsersController.index);
usersRouter.post('/', UsersController.create);

export default usersRouter;
