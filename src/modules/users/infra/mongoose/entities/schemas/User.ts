import { model, Schema, Document } from 'mongoose';

import BcryptHashProvider from '../../../../providers/HashProvider/implementations/BCryptHashProvider';

export interface IUserDocument extends Document {
  name: string;
  email: string;
  avatar?: string;
  password: string;
}

const UserSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    avatar: {
      type: String,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
  },
  {
    timestamps: true,
  },
);

// Document middlewares
UserSchema.pre<IUserDocument>('save', async function (next) {
  const hashProvider = new BcryptHashProvider();
  if (this.isModified('password')) {
    this.password = await hashProvider.generateHash(this.password);
  }
});

export default model<IUserDocument>('User', UserSchema);
