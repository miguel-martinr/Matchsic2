import * as mongoose from 'mongoose';
import {UserSchema} from '../Schemas/user';

export interface UserInterface extends mongoose.Document {
  name: string,
  username: string,
  email: string,
  password: string,
}

export const UserModel = mongoose.model<UserInterface>('users', UserSchema);
