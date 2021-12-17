
import * as mongoose from 'mongoose';

const databaseURL = process.env.MONGODB_URL || 'mongodb://localhost:27017/matchsic';

export const connectDB = async () => {
  try {
    return await mongoose.connect(databaseURL);
  } catch (error: any) {
    const errorMessage = error.message || 'unknown';
    throw new Error(`Error while connecting to database: ${errorMessage}`);
  }
};
