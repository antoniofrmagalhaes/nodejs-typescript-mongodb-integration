import { injectable, inject } from 'tsyringe';
import { Document } from 'mongoose';

import IProductsRepository from '../repositories/IProductsRepository';
import { IQuery } from '../infra/mongoose/repositories/ProductsRepository';

@injectable()
class FindProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) { }

  public async execute(query: IQuery): Promise<Document[]> {
    const result = await this.productsRepository.find(query);
    return result;
  }
}

export default FindProductService;
