import { Document } from 'mongoose';

import ICreateUserDTO from '../DTO/ICreateUserDTO';
import { IUserDocument } from '../infra/mongoose/entities/schemas/User';

export default interface IUsersRepository {
  create(userData: ICreateUserDTO): Promise<Document>;
  findByEmail(email: string): Promise<IUserDocument | null>;
  findByEmailWithPassword(email: string): Promise<IUserDocument | null>;
}
