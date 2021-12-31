import {db} from '../Data/DB';
import {ActiveUserInterface} from '../Data/Models/activeUsers';


// eslint-disable-next-line max-len
export const set = async (user: ActiveUserInterface | string, active: boolean = true) => {
  try {
    return db.user.setActiveData(user, active);
  } catch (error: any) {
    const errorMessage = error.message || 'unknown';
    throw new Error(`setActiveUser service error: ${errorMessage}`);
  }
};

// eslint-disable-next-line max-len
export const update = async (user: Partial<ActiveUserInterface>) => {
  try {
    return db.user.updateActiveData(user);
  } catch (error: any) {
    const errorMessage = error.message || 'unknown';
    throw new Error(`setActiveUser service error: ${errorMessage}`);
  }
};

export const activeDataService = {
  set,
  update,
};

