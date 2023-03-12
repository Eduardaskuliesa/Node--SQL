import { createUser } from './create-user';
import { getUserByEmail } from './get-user';
import { emailAvailable } from './email-availabe';

const UserModel = {
  getUserByEmail,
  createUser,
  emailAvailable,
};

export default UserModel;
