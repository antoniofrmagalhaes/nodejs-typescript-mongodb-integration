import { IUserDocument } from '../infra/mongoose/entities/schemas/User';

import ICreateUserDTO from '../DTO/ICreateUserDTO';

export default interface IUsersRepository {
  create(userData: ICreateUserDTO): Promise<IUserDocument>;
  findById(user_id: string): Promise<IUserDocument | undefined>;
  findByEmail(email: string): Promise<IUserDocument | undefined>;
  findByEmailWithPassword(email: string): Promise<IUserDocument | undefined>;
}
