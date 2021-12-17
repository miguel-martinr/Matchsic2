import {UserInterface, UserModel} from '../Models/user';

const addUser = async (user: UserInterface) => {
  const newUser = new UserModel(user);
  return newUser.save();
};

export const user = {
  addUser,
};

