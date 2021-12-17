import {UserInterface, UserModel} from '../Models/user';

const registerUser = async (user: UserInterface) => {
  const newUser = new UserModel(user);
  return newUser.save();
};

export const user = {
  registerUser,
};




