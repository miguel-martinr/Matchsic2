import {LocationData} from './location';
import {MusicData} from './music';
import {Image} from './util';





export interface UserData {
  username: string,
  profileLink: string,
  profilePicture: Image,
  music: MusicData,
  location: LocationData,
}


export type NotificationStatus = 'unread' | 'read';

export interface Notification {
  id: string,
  sender: UserData,
  status: NotificationStatus,
  issuedAt: number, // Date?
}


export interface ProfileData {
  name: string,
  description: string,
  musicGenres: string[],
}