

import { getProfileLinkService, getUserDataService } from '../../Services';
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


const setActiveData = async (user: ActiveUserInterface | string,
    active: boolean = true) => {
  try {
    // Deletes user from active-users
    if (typeof user === 'string' && active === false) {
      await ActiveUserModel.deleteOne({userId: user});
      return;
    }

    // Saves user to active-users
    user = user as ActiveUserInterface;
    const activeUser = new ActiveUserModel(user);
    return activeUser.save();
  } catch (err: any) {
    const errorMessage = err.message || 'unknown';
    throw new Error(`DB setActive error: ${errorMessage}`);
  }
};


// eslint-disable-next-line max-len
const updateActiveData = async (user: Partial<ActiveUserInterface>) => {
  try {
    // Updates user active data
    const userExists = await ActiveUserModel.findOne({userId: user.userId});
    if (userExists) {
      // eslint-disable-next-line max-len
      return await ActiveUserModel.findOneAndUpdate({userId: user.userId}, user, {new: true}).select('-_id -__v -userId');
    } else {
      // eslint-disable-next-line max-len
      const {username} = await getUserDataService(user.userId as string);
      const profileLink = getProfileLinkService(username);

      user.username = username;
      user.profileLink = profileLink;

      const activeUser = new ActiveUserModel(user as ActiveUserInterface);
      return await activeUser.save();
    }
  } catch (err: any) {
    const errorMessage = err.message || 'unknown';
    throw new Error(`DB updateActiveData error: ${errorMessage}`);
  }
};

const getData = async (userId: string) => {
  try {
    const user = await UserModel.findById(userId).select('-__v -_id');
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  } catch (err: any) {
    const errorMessage = err.message || 'unknown';
    throw new Error(`DB getData error: ${errorMessage}`);
  }
};


const updateData = async (userId :string, user: Partial<UserInterface>) => {
  try {
    // Updates user active data
    const userExists = await UserModel.findById(userId).select('-__v -_id');
    if (userExists) {
      // eslint-disable-next-line max-len
      return await UserModel.findByIdAndUpdate(userId, user, {new: true}).select('-_id -__v -userId');
    }
  } catch (err: any) {
    const errorMessage = err.message || 'unknown';
    throw new Error(`DB updateActiveData error: ${errorMessage}`);
  }
};


export const user = {
  addUser,
  verify,
  getNearUsers,
  setActiveData,
  updateActiveData,
  getData,
  updateData,
};

