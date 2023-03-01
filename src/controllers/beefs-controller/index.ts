import express from 'express';

import { createBeef } from './mutations/create-beef';
import { deleteBeef } from './mutations/delete-beef';
import { updateBeef } from './mutations/update-beef';
import { getBeef } from './queries/get-beef';
import { getBeefs } from './queries/get-beefs';

const beefsRouter = express.Router();

beefsRouter.get('/', getBeefs);
beefsRouter.get('/:id', getBeef);

beefsRouter.post('/', createBeef);
beefsRouter.patch('/:id', updateBeef);
beefsRouter.delete('/:id', deleteBeef);

export default beefsRouter;
