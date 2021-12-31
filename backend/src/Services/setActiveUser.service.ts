import {db} from '../Data/DB';
import {ActiveUserInterface} from '../Data/Models/activeUsers';

// eslint-disable-next-line max-len
export const updateActiveData = async (user: ActiveUserInterface | string, active: boolean) => {
  try {
    return await db.user.updateActiveData(user, active);
  } catch (error: any) {
    const errorMessage = error.message || 'unknown';
    throw new Error(`setActiveUser service error: ${errorMessage}`);
  }
};
