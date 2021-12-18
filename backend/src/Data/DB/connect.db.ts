
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({path: '../.env'});


const databaseURL = 'mongodb://localhost:27017/matchsic';
//  databaseURL = process.env.MONGODB_URL;

export const connectDB = async () => {
  try {
    return await mongoose.connect(databaseURL || '');
  } catch (error: any) {
    const errorMessage = error.message || 'unknown';
    throw new Error(`Error while connecting to database: ${errorMessage}`);
  }
};
