import * as mongoose from 'mongoose';
import {LocationData} from '../../types/location';
import {MusicData} from '../../types/music';
import {ActiveUserSchema} from '../Schemas/activeUser';

export interface ActiveUserInterface {
  userId: string,
  location: LocationData,
  music: MusicData,
}

// eslint-disable-next-line max-len
export const ActiveUserModel = mongoose.model<ActiveUserInterface>('active-users', ActiveUserSchema);

