/* eslint-disable import/prefer-default-export */
import { RequestHandler } from 'express';
import ErrorService from '../../services/error-service';
import BeefsModel from '../model';

import { BeefViewModel } from '../types';

export const getBeefs: RequestHandler<
{},
BeefViewModel[] | ErrorResponse,
{},
{}
> = async (req, res) => {
  try {
    const beefs = await BeefsModel.getBeefs();
    res.status(200).json(beefs);
  } catch (error) {
    const [status, errorResponse] = ErrorService.handleError(error);
    res.status(status).json(errorResponse);
  }
};
