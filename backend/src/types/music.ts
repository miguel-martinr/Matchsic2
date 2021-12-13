import {Image} from './util';

export type TrackStaus = 'playing' | 'paused' | 'stopped';


export interface MusicData {
  trackName: string,
  authorsNames: string[],
  coverImage: Image,
  status: TrackStaus,
}
