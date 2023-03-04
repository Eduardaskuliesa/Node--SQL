/* eslint-disable import/prefer-default-export */
import { RequestHandler } from 'express';
import ErrorService, { ServerSetupError } from '../../services/error-service';
import BeefsModel from '../model';
import { BeefViewModel, PartialBeefData } from '../types';
import partialBeefDataValidationSchema from '../validation-schemas/partial-house-data-validation-schema';

export const updateBeef: RequestHandler<
{ id: string | undefined },
BeefViewModel | ErrorResponse,
PartialBeefData,
{}
> = async (req, res) => {
  const { id } = req.params;

  try {
    if (id === undefined) throw new ServerSetupError();
    const partialBeefData = partialBeefDataValidationSchema.validateSync(
      req.body,
      { abortEarly: false },
    );

    const updatedBeef = await BeefsModel.updateBeef(id, partialBeefData);
    res.status(200).json(updatedBeef);
  } catch (err) {
    const [status, errorResponse] = ErrorService.handleError(err);
    res.status(status).json(errorResponse);
  }
};
