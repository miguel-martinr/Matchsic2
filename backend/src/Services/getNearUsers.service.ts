import {db} from '../Data/DB';

export const getNearUsersService = async (userId: string) => {
  try {
    return await db.user.getNearUsers(userId);
  } catch (error: any) {
    const errorMessage = error.message || 'unknown';
    throw new Error(`getNearUsers service error: ${errorMessage}`);
  }
};
