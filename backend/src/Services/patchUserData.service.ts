import {db} from '../Data/DB';
import {UserInterface} from '../Data/Models/user';

// eslint-disable-next-line max-len
export const patchUserDataService = async (userid: string, user: UserInterface) => {
  try {
    return await db.user.updateData(userid, user);
  } catch (error: any) {
    const errorMessage = error.message || 'unknown';
    throw new Error(`Error while update user info: ${errorMessage}`);
  }
};
