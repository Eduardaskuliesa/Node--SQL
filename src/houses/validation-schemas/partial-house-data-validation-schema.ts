import * as yup from 'yup';
import { PartialBeefData } from '../types';
import imagesSchema from './property-schemas/images-schema';
import farmSchema from './property-schemas/farm-schema';
import priceSchema from './property-schemas/price-schema';
import ratingSchema from './property-schemas/rating-schema';
import cutSchema from './property-schemas/cut-schema';

const partialBeefDataValidationSchema: yup.ObjectSchema<PartialBeefData> = yup.object({
  cut: cutSchema,
  price: priceSchema(),
  rating: ratingSchema,
  images: imagesSchema,
  farm: farmSchema,
}).strict(true);

export default partialBeefDataValidationSchema;
