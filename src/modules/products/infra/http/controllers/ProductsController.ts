import { container } from 'tsyringe';
import { Request, Response } from 'express';

import CreateProductService from '../../../services/CreateProductService';
import FindProductService from '../../../services/FindProductsService';

class ProductsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const findProduct = container.resolve(FindProductService);
    const result = await findProduct.execute(request.query);
    return response.json(result);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const createProduct = container.resolve(CreateProductService);
    const product = await createProduct.execute(request.body);
    return response.json(product);
  }
}

export default new ProductsController();
