import {ShallowUser} from '../../types/user';
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

export const user = {
  addUser,
  verify,
};

