import dotenv from 'dotenv';
import path from 'path';

// Get current file directory
const __dirname = path.resolve(import.meta.url.replace('file://', ''), '../')
const ENV_FILE_PATH = path.join(__dirname, '../.env');

dotenv.config({path: ENV_FILE_PATH});

export const config = {
  mode: 'development',
  env: process.env,
  dirname: __dirname,
};
