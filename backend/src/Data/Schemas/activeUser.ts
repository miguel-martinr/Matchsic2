import * as mongoose from 'mongoose';

export const ActiveUserSchema = new mongoose.Schema({
  userId: {type: String, required: true, unique: true},
  username: {type: String, required: true},
  profileLink: {type: String, required: true},
  location: {
    coordinates: {
      latitude: {type: Number, required: true},
      longitude: {type: Number, required: true},
    },
  },

  music: {
    trackName: {type: String, required: true},
    authorsNames: {type: [String], required: true},
    coverImage: {
      url: {type: String, required: true},
      height: {type: Number, required: true},
      width: {type: Number, required: true},
    },
    status: {type: String, required: true},
  },

  // credentials: {
  //   spotify: {
  //     accessToken: {type: String, required: true},
  //   },
  // },
});
