import { ActiveUserInterface } from "../../../../../backend/src/Data/Models/activeUsers";

export const activeData: ActiveUserInterface = {
  // set by server
  userId: '61bd4e30c59b1240d579b0b3', // RodrygoG
  username: 'RodrygoG',
  profileLink: 'someProfileLink',

  // sent by client
  location: { coordinates: { latitude: -23.5, longitude: -46.6 } },
  music: {
    trackName: 'The Rover',
    authorsNames: ['Led Zepellin'],
    coverImage: { url: 'https://i.scdn.co/image/ab67616d0000b273f8f9b9b9b9b9b9b9b9b9b9b9b9', width: 300, height: 300 },
    status: 'playing',
  },
};