/* eslint-disable import/prefer-default-export */
import { RequestHandler } from 'express';
import beefs from '../beefs-data';
import BeefModel from '../beef-model';

export const deleteBeef: RequestHandler<
{ id: string | undefined },
BeefModel | ResponseError,
{},
{}
> = (req, res) => {
  const { id } = req.params;

  if (id === undefined) {
    res.status(400).json({ error: 'server setup error' });
    return;
  }

  const foundBeefIndex = beefs.findIndex((beef) => beef.id === id);

  if (foundBeefIndex === -1) {
    res.status(400).json({ error: `beef was not found with id '${id}'` });
    return;
  }

  const [deletedBeef] = beefs.splice(foundBeefIndex, 1);

  res.status(200).json(deletedBeef);
};
