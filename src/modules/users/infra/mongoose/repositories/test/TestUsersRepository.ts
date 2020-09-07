import { uuid } from 'uuidv4';

import User, { IUserDocument } from '../../entities/schemas/User';
import ICreateUserDTO from '../../../../DTO/ICreateUserDTO';

class TestUsersRepository {
  private users: IUserDocument[] = [];

  public async find(): Promise<IUserDocument[]> {
    const users = await User.find();
    return users;
  }

  public async create({
    name,
    email,
    avatar,
    password,
  }: ICreateUserDTO): Promise<IUserDocument> {
    const user = new User();
    Object.assign(user, { _id: uuid() }, { name, email, avatar, password });
    this.users.push(user);
    return user;
  }

  public async findByEmailWithPassword(
    email: string,
  ): Promise<IUserDocument | undefined> {
    const user = this.users.find(user => user.email === email);
    return user;
  }
}

export default TestUsersRepository;
