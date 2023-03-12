import express, { RequestHandler } from 'express';
import authMiddleware from '../middlewares/auth-middlewere';

import { createBeef } from './mutations/create-beef';
import { deleteBeef } from './mutations/delete-beef';
import { updateBeef } from './mutations/update-beef';
import { getBeef } from './queries/get-beef';
import { getBeefs } from './queries/get-beefs';

const beefsRouter = express.Router();

beefsRouter.get('/', getBeefs);
beefsRouter.get('/:id', getBeef);

beefsRouter.post('/', authMiddleware, createBeef);
beefsRouter.patch('/:id', authMiddleware, updateBeef as RequestHandler);
beefsRouter.delete('/:id', authMiddleware, deleteBeef as RequestHandler);

export default beefsRouter;
