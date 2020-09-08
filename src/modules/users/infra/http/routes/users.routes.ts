import { Router } from 'express';
import UsersController from '../controllers/UsersController';
import JWTAuthenticated from '../../middlewares/JWTAuthenticated';

const usersRouter = Router();

usersRouter.use(JWTAuthenticated);
usersRouter.get('/', UsersController.show);
usersRouter.post('/', UsersController.create);

export default usersRouter;
