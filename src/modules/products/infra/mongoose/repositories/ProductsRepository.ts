import { Document } from 'mongoose';

import IProductDTO from '../../../DTO/IProductDTO';
import Product from '../entities/schemas/Product';

export interface IQuery {
  page?: string;
  limit?: string;
  category?: string;
  subcategory?: string;
}

class ProductsRepository {
  public async create(data: IProductDTO): Promise<Document> {
    const product = await Product.create(data);
    return product;
  }
  public async find(query: IQuery): Promise<Document[]> {
    if (query.category) {
      const result = await Product.find()
        .where('category')
        .equals(query.category)
        .skip((Number(query.page) - 1) * Number(query.limit) || 0)
        .limit(Number(query.limit) || 10);
      return result;
    }
    const result = await Product.find()
      .skip((Number(query.page) - 1) * Number(query.limit) || 0)
      .limit(Number(query.limit) || 10);
    return result;
  }
}

export default ProductsRepository;
