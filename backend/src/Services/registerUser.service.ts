import {db} from '../Data/DB';
import {UserInterface} from '../Data/Models/user';

export const registerUser = async (user: UserInterface) => {
  try {
    return await db.user.addUser(user);
  } catch (error: any) {
    const errorMessage = error.message || 'unknown';
    throw new Error(`Error while registering new user: ${errorMessage}`);
  }
};
