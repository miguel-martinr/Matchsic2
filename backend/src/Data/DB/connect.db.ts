
import mongoose from 'mongoose';
import {config} from '../../config';


let databaseURL = '';
if (config.mode === 'development') {
  databaseURL = 'mongodb://localhost:27017/matchsic';
} else {
  databaseURL = process.env.MONGODB_URL as string;
}


export const connectDB = async () => {
  try {
    return await mongoose.connect(databaseURL || '');
  } catch (error: any) {
    const errorMessage = error.message || 'unknown';
    throw new Error(`Error while connecting to database: ${errorMessage}`);
  }
};
