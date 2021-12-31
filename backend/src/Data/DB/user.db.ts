

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
    // eslint-disable-next-line max-len
    const thisUser = await ActiveUserModel.findOne({userId});
    if (!thisUser) {
      throw new Error('Active user not found');
    }

    // eslint-disable-next-line max-len
    const nearUsers = await ActiveUserModel.find({}).select('-_id -__v -userId');
    return nearUsers;
  } catch (error: any) {
    const errorMessage = error.message || 'unknown';
    throw new Error(`DB near users error: ${errorMessage}`);
  }
};

// eslint-disable-next-line max-len
const updateActiveData = async (user: ActiveUserInterface | string,
    active: boolean = true) => {
  try {
    // Deletes user from active-users
    if (typeof user === 'string' && active === false) {
      await ActiveUserModel.deleteOne({userId: user});
      return;
    }

    // Updates user active data
    user = user as ActiveUserInterface;
    const userExists = await ActiveUserModel.findOne({userId: user.userId});
    if (userExists) {
      return await ActiveUserModel.updateOne({userId: user.userId}, user);
    }

    // Saves user to active-users
    const activeUser = new ActiveUserModel(user);
    return activeUser.save();
  } catch (err: any) {
    const errorMessage = err.message || 'unknown';
    throw new Error(`DB setActive error: ${errorMessage}`);
  }
};

export const user = {
  addUser,
  verify,
  getNearUsers,
  updateActiveData,
};

