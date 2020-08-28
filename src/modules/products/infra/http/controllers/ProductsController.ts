import { container } from 'tsyringe';
import { Request, Response } from 'express';

import Product from '../../mongoose/entities/schemas/Product';

import CreateProductService from '../../../services/CreateProductService';

class ProductsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const products = await Product.find();
    return response.json(products);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const createProduct = container.resolve(CreateProductService);
    const product = await createProduct.execute(request.body);
    return response.json(product);
  }
}

export default new ProductsController();
