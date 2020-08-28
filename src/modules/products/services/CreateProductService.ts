import { injectable, inject } from 'tsyringe';
import { Document } from 'mongoose';

import IProductsRepository from '../repositories/IProductsRepository';
import IProductDTO from '../DTO/IProductDTO';

@injectable()
class CreateProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}
  public async execute(productData: IProductDTO): Promise<Document> {
    const product = await this.productsRepository.create(productData);
    return product;
  }
}

export default CreateProductService;
