import { Router } from 'express';
import UsersController from '../controllers/UsersController';

const userRouter = Router();

userRouter.get('/', UsersController.index);
userRouter.post('/', UsersController.create);

export default userRouter;
