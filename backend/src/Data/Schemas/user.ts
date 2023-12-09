import mongoose from 'mongoose';

const Schema = mongoose.Schema;
export const UserSchema = new Schema({
  name: {type: String, required: true},
  username: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  description: {type: String},
  musicPreference: [{type: String}],
  socialNetwork: [{type: String}],
  spotifyCredentials: {
    accessToken: {type: String, default: ''},
    refreshToken: {type: String, default: ''},
    expirationTime: {type: Number, default: 0}, // Expired by default
  },
});
