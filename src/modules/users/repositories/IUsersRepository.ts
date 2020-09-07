import { IUserDocument } from '../infra/mongoose/entities/schemas/User';

import ICreateUserDTO from '../DTO/ICreateUserDTO';

export default interface IUsersRepository {
  create(userData: ICreateUserDTO): Promise<IUserDocument>;
  findByEmailWithPassword(email: string): Promise<IUserDocument | undefined>;
}
