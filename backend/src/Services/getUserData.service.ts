import {db} from '../Data/DB';

export const getUserDataService = async (userId: string) => {
  try {
    const user = await db.user.getData(userId);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  } catch (err: any) {
    const errorMessage = err.message || 'unknown';
    throw new Error(`getUserData.service error: ${errorMessage}`);
  }
};

