

import {ShallowUser} from '../../types/user';
import {ActiveUserInterface, ActiveUserModel} from '../Models/activeUsers';
import {UserInterface, UserModel} from '../Models/user';

const addUser = async (user: UserInterface) => {
  try {
    const newUser = new UserModel(user);
    return await newUser.save();
  } catch (error: any) {
    const errorMessage = error.message || 'unknown';
    throw new Error(`Error while adding new user: ${errorMessage}`);
  }
};


const verify = async (user: ShallowUser) => {
  try {
    const existingUser = await UserModel.findOne(user);
    return existingUser;
  } catch (error: any) {
    throw new Error(error);
  }
};

const getNearUsers = async (userId: string) => {
  try {
    const thisUser = await ActiveUserModel.findOne({userId});
    if (!thisUser) {
      throw new Error('Active user not found');
    }

    const nearUsers = await ActiveUserModel.find({});
    return nearUsers;
  } catch (error: any) {
    const errorMessage = error.message || 'unknown';
    throw new Error(`DB near users error: ${errorMessage}`);
  }
};

// eslint-disable-next-line max-len
const setActive = async (user: ActiveUserInterface | string,
    active: boolean) => {
  try {
    if (typeof user === 'string' && active === false) {
      await ActiveUserModel.deleteOne({userId: user});
      return;
    }

    const activeUser = new ActiveUserModel(user as ActiveUserInterface);
    return await activeUser.save();
  } catch (err: any) {
    const errorMessage = err.message || 'unknown';
    throw new Error(`DB setActive error: ${errorMessage}`);
  }
};

export const user = {
  addUser,
  verify,
  getNearUsers,
  setActive,
};

