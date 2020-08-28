import { Document } from 'mongoose';

import IUserDTO from '../../../DTO/IUser';
import User from '../entities/schemas/User';

class UsersRepository {
  public async create(userData: IUserDTO): Promise<Document> {
    const user = await User.create(userData);
    return user;
  }
}

export default UsersRepository;
