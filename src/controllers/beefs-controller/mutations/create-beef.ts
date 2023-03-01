/* eslint-disable import/prefer-default-export */
import { RequestHandler } from 'express';
import BeefModel from '../beef-model';
import beefs from '../beefs-data';

const isBeefData = (
  potentialBeefData: PartialBeefData | BeefData,
): potentialBeefData is BeefData => {
  const {
    cut, price, rating, images, farm,
  } = potentialBeefData;

  if (typeof cut !== 'string') return false;
  if (typeof price !== 'string') return false;
  if (typeof rating !== 'number') return false;
  if (!Array.isArray(images)) return false;
  if (images.some((img) => typeof img !== 'string')) return false;
  if (farm === null || typeof farm !== 'object') return false;
  if (typeof farm.country !== 'string') return false;
  if (typeof farm.name !== 'string') return false;

  return true;
};

type BeefData = Omit<BeefModel, 'id'>;
type PartialBeefData = PartialRecursive<BeefData>;

export const createBeef: RequestHandler<
{},
BeefModel | ResponseError,
PartialBeefData,
{}
> = (req, res) => {
  const beefData = req.body;
  if (!isBeefData(beefData)) {
    res.status(400).json({ error: 'Incorrect data' });
    return;
  }

  const newBeef: BeefModel = { id: '5', ...beefData };
  beefs.push(newBeef);
  res.status(201).json(newBeef);
};
