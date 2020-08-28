import { Document } from 'mongoose';

import IProductDTO from '../DTO/IProductDTO';

export default interface IProductsRepository {
  create(data: IProductDTO): Promise<Document>;
}
