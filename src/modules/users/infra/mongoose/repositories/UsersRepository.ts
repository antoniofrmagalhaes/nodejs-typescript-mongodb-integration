import { Document } from 'mongoose';

import IUserDTO from '../../../DTO/IUser';
import User, { IUserDocument } from '../entities/schemas/User';

class UsersRepository {
  constructor() {}
  public async create(userData: IUserDTO): Promise<Document> {
    const user = await User.create(userData);
    return user;
  }

  public async findByEmail(email: string): Promise<IUserDocument | null> {
    const user = await User.findOne({ email });
    return user;
  }

  public async findByEmailWithPassword(
    email: string,
  ): Promise<IUserDocument | null> {
    const user = await User.findOne({ email }).select('+password');
    return user;
  }
}

export default UsersRepository;
