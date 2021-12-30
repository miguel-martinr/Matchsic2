import * as mongoose from 'mongoose';

export const ActiveUserSchema = new mongoose.Schema({
  userId: {type: String, required: true},
  location: {
    required: true,
    coordinates: {
      latitude: {type: Number, required: true},
      longitude: {type: Number, required: true},
    },
  },

  music: {
    required: true,
    trackName: {type: String, required: true},
    authorsNames: {type: [String], required: true},
    coverImage: {
      required: true,
      url: {type: String, required: true},
      height: {type: Number, required: true},
      width: {type: Number, required: true},
    },
    status: {type: String, required: true},
  },

  credentials: {
    required: true,
    spotify: {
      required: true, // ?
      accessToken: {type: String, required: true},
    },
  },
});
