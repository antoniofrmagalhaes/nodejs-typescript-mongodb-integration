import { Document } from 'mongoose';

import IUserDTO from '../DTO/IUser';

export default interface IUsersRepository {
  create(userData: IUserDTO): Promise<Document>;
}
