import * as yup from 'yup';

const farmSchema = yup
  .object({
    country: yup.string()
      .required('farm.title is required')
      .min(2, 'farm.title must have at least 2 symbols')
      .max(32, 'farm.title can\'t have more than 32 symbols'),
    name: yup.string()
      .required('farm.name is required')
      .min(2, 'farm.name must have at least 2 symbols')
      .max(32, 'farm.name can\'t have more than 32 symbols'),
  });

export default farmSchema;
