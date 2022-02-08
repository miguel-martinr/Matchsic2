import * as mongoose from 'mongoose';

const defaultImageUrl = 'https://imagenes.elpais.com/resizer/H5Nn0FsAAGyJ1GSMHxHG9GxmXNY=/1200x0/ep01.epimg.net/elpais/imagenes/2016/05/31/ciencia/1464687786_596536_1464698347_noticia_fotograma.jpg';
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
    trackName: {type: String, default: 'Unknown'},
    authorsNames: {type: [String]},
    coverImage: {
      url: {type: String, default: defaultImageUrl},
      height: {type: Number, default: 100},
      width: {type: Number, default: 100},
    },
    status: {type: String, default: 'stopped'},
  },
});
