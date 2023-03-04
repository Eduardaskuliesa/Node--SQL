/* eslint-disable import/prefer-default-export */
import { RequestHandler } from 'express';
import ErrorService from '../../services/error-service';
import BeefsModel from '../model';
import { BeefViewModel, BeefData } from '../types';
import beefDataValidationSchema from '../validation-schemas/beef-data-validation-schema';

export const createBeef: RequestHandler<
{},
BeefViewModel | ErrorResponse,
BeefData,
{}
> = async (req, res) => {
  try {
    const beefData: BeefData = beefDataValidationSchema
      .validateSync(req.body, { abortEarly: false });

    const createdBeef = await BeefsModel.createBeef(beefData);

    res.status(201).json(createdBeef);
  } catch (err) {
    const [status, errorResponse] = ErrorService.handleError(err);
    res.status(status).json(errorResponse);
  }
};
