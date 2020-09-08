import ICreateUserDTO from '../../../DTO/ICreateUserDTO';
import User, { IUserDocument } from '../entities/schemas/User';

class UsersRepository {
  public async create(userData: ICreateUserDTO): Promise<IUserDocument> {
    const user = await User.create(userData);
    return user;
  }

  public async findById(user_id: string): Promise<IUserDocument | undefined> {
    const user = await User.findById(user_id);
    return user;
  }

  public async findByEmail(email: string): Promise<IUserDocument | undefined> {
    const user = await User.findOne({ email });
    return user;
  }

  public async findByEmailWithPassword(
    email: string,
  ): Promise<IUserDocument | undefined> {
    const user = await User.findOne({ email }).select('+password');
    return user;
  }
}

export default UsersRepository;
