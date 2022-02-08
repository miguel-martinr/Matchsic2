import * as mongoose from 'mongoose';

export const ActiveUserSchema = new mongoose.Schema({
  userId: {type: String, required: true, unique: true},
  username: {type: String, required: true},
  profileLink: {type: String, required: true},
  location: {
    coordinates: {
      latitude: {type: Number, default: 0},
      longitude: {type: Number, default: 0},
    },
  },

  music: {
    trackName: {type: String},
    authorsNames: {type: [String]},
    coverImage: {
      url: {type: String},
      height: {type: Number},
      width: {type: Number},
    },
    status: {type: String},
  },

  // credentials: {
  //   spotify: {
  //     accessToken: {type: String, required: true},
  //   },
  // },
});
