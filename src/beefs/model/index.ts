import { getBeef } from './get-beef';
import { getBeefs } from './get-beefs';
import { createBeef } from './create-beef';
import { updateBeef } from './update-beef';
import { deleteBeef } from './delete-beef';

const BeefsModel = {
  getBeef,
  getBeefs,

  createBeef,
  updateBeef,
  deleteBeef,
};

export default BeefsModel;
