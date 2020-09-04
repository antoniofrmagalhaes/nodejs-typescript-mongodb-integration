import { Document } from 'mongoose';

import IUserDTO from '../DTO/IUserDTO';
import { IUserDocument } from '../infra/mongoose/entities/schemas/User';

export default interface IUsersRepository {
  create(userData: IUserDTO): Promise<Document>;
  findByEmail(email: string): Promise<IUserDocument | null>;
  findByEmailWithPassword(email: string): Promise<IUserDocument | null>;
}
