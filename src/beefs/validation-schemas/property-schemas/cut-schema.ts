import * as yup from 'yup';

const cutSchema = yup.string()
  .min(2, 'cut must have at least 2 symbols')
  .max(32, 'cut can\'t have more than 32 symbols');

export default cutSchema;
