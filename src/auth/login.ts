/* eslint-disable import/prefer-default-export */
import { RequestHandler } from 'express';
import ErrorService from '../services/error-service';
import BcryptService from '../services/bcrypt-services';
import { CredentialsPartial, AuthSuccessResponse } from './types';
import credentialsValidationSchema from './validation-schemas/credentials-validation-schema';
import UserModel from '../model';
import { createAuthSuccessResponse } from './helpers/create-auth-succes-response';

export const login: RequestHandler<
{},
AuthSuccessResponse | ErrorResponse,
CredentialsPartial,
{}
> = async (req, res) => {
  try {
    const credentials = credentialsValidationSchema.validateSync(req.body, { abortEarly: false });
    const user = await UserModel.getUserByEmail(credentials.email);
    const validPassword = BcryptService.compare(credentials.password, user.password);

    if (!validPassword) throw new Error('Incorrect password');

    const authSuccessResponse = createAuthSuccessResponse(user);
    res.status(200).json(authSuccessResponse);
  } catch (err) {
    const [status, errorResponse] = ErrorService.handleError(err);
    res.status(status).json(errorResponse);
  }
};
