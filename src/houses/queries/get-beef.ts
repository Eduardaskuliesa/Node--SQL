/* eslint-disable import/prefer-default-export */
import { RequestHandler } from 'express';
import ErrorService, { ServerSetupError } from '../../services/error-service';
import BeefsModel from '../model';
import { BeefViewModel } from '../types';

export const getBeef: RequestHandler<
{ id: string | undefined },
BeefViewModel | ErrorResponse,
{},
{}
> = async (req, res) => {
  const { id } = req.params;

  try {
    if (id === undefined) throw new ServerSetupError();
    const beef = await BeefsModel.getBeef(id);

    res.status(200).json(beef);
  } catch (error) {
    const [status, errorResponse] = ErrorService.handleError(error);
    res.status(status).json(errorResponse);
  }
};
