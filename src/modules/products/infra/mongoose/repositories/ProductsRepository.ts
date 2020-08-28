import { Document } from 'mongoose';

import IProductDTO from '../../../DTO/IProductDTO';
import Product from '../entities/schemas/Product';

class ProductsRepository {
  public async create(data: IProductDTO): Promise<Document> {
    const product = await Product.create(data);
    return product;
  }
}

export default ProductsRepository;
