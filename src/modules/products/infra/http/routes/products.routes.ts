import { Router } from 'express';
import ProductsController from '../controllers/ProductsController';

const userRouter = Router();

userRouter.get('/', ProductsController.index);
userRouter.post('/', ProductsController.create);

export default userRouter;
