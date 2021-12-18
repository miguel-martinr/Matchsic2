import {db} from '../Data/DB';
import {ShallowUser} from '../types/user';

export const verifyUserService = async (user: ShallowUser) => {
  try {
    return await db.user.verify(user);
  } catch (error: any) {
    const errorMessage = error.message || 'unknown';
    throw new Error(`Error while verifying user: ${errorMessage}`);
  }
};
