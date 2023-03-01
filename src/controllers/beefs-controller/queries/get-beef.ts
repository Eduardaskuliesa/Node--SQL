/* eslint-disable import/prefer-default-export */
import { RequestHandler } from 'express';
import BeefModel from '../beef-model';
import beefs from '../beefs-data';

export const getBeef: RequestHandler<
{},
BeefModel[],
{},
{}
> = (req, res) => {
  res.status(200).json(beefs);
};
