import {db} from '../Data/DB';

export const getUserInfo = async (userId: string) => {
  try {
    return await db.user.getUserInfo(userId);
  } catch (error: any) {
    const errorMessage = error.message || 'unknown';
    throw new Error(`getNearUsers service error: ${errorMessage}`);
  }
};
