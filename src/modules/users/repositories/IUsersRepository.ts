import { IUserDocument } from '../infra/mongoose/entities/schemas/User';

import ICreateUserDTO from '../DTO/ICreateUserDTO';

export default interface IUsersRepository {
  find(): Promise<IUserDocument[]>;
  create(userData: ICreateUserDTO): Promise<IUserDocument>;
  findById(id: string): Promise<IUserDocument | null>;
  findByEmail(email: string): Promise<IUserDocument | null>;
  findByEmailWithPassword(email: string): Promise<IUserDocument | null>;
}
