import { model, Schema, Document } from 'mongoose';

export interface IUserSchema extends Document {
  name?: string;
  email?: string;
  password?: string;
}

const UserSchema = new Schema(
  {
    name: String,
    email: String,
    password: String,
  },
  {
    timestamps: true,
  },
);

export default model<IUserSchema>('User', UserSchema);