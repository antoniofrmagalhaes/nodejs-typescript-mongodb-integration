import { Document } from 'mongoose';

import IProductDTO from '../DTO/IProductDTO';

import { IQuery } from '../infra/mongoose/repositories/ProductsRepository';

export default interface IProductsRepository {
  create(data: IProductDTO): Promise<Document>;
  find(query: IQuery): Promise<Document[]>;
}
