import { IUserDocument } from '../infra/mongoose/entities/schemas/User';

import ICreateUserDTO from '../DTO/ICreateUserDTO';

export default interface IUsersRepository {
  create(userData: ICreateUserDTO): Promise<IUserDocument>;
  findByEmail(email: string): Promise<IUserDocument | undefined>;
  findByEmailWithPassword(email: string): Promise<IUserDocument | undefined>;
}
