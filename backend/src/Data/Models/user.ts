import mongoose from 'mongoose';
import {UserSchema} from '../Schemas/user';

export interface SpotifyCredentials {
  accessToken: string;
  refreshToken: string;
  expirationTime: number;
}
export interface UserInterface extends mongoose.Document {
  name: string,
  username: string,
  email: string,
  password: string,
  description: string,
  musicPreference: [string],
  socialNetwork: [string],
  spotifyCredentials: SpotifyCredentials,
}

export const UserModel = mongoose.model<UserInterface>('users', UserSchema);
