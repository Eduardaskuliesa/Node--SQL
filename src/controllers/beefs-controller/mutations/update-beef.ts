/* eslint-disable import/prefer-default-export */
import { RequestHandler } from 'express';
import { ValidationError } from 'yup';
import BeefModel, { PartialBeefData } from '../beef-model';
import beefs from '../beefs-data';
import partialBeefDataValidationSchema from '../validation-schemas/partial-house-data-validation-schema';

export const updateBeef: RequestHandler<
{ id: string | undefined },
BeefModel | ResponseError,
PartialBeefData,
{}
> = (req, res) => {
  const { id } = req.params;

  if (id === undefined) {
    res.status(400).json({ error: 'server setup error' });
    return;
  }

  const foundBeefIndex = beefs.findIndex((beef) => beef.id === id);

  if (foundBeefIndex === -1) {
    res.status(400).json({ error: `Beef was not found with id '${id}'` });
    return;
  }

  try {
    const partialBeefData = partialBeefDataValidationSchema.validateSync(
      req.body,
      { abortEarly: false },
    );
    const foundBeef = beefs[foundBeefIndex];

    const updatedBeef = {
      ...foundBeef,
      ...partialBeefData,
    };

    beefs.splice(foundBeefIndex, 1, updatedBeef);

    res.status(200).json(updatedBeef);
  } catch (err) {
    if (err instanceof ValidationError) {
      const manyErrors = err.errors.length > 1;
      res.status(400).json({
        error: manyErrors ? 'Validation errors' : err.errors[0],
        errors: manyErrors ? err.errors : undefined,
      });
    } else if (err instanceof Error) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(400).json({ error: 'Request error' });
    }
  }
};
