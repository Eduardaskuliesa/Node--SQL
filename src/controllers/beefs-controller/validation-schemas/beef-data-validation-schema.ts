import * as yup from 'yup';
import { BeefData } from '../beef-model';
import imagesSchema from './property-schemas/images-schema';
import farmSchema from './property-schemas/farm-schema';
import priceSchema from './property-schemas/price-schema';
import ratingSchema from './property-schemas/rating-schema';
import cutSchema from './property-schemas/cut-schema';

const beefDataValidationSchema: yup.ObjectSchema<BeefData> = yup.object({
  cut: cutSchema.required('cut is required'),
  price: priceSchema(true),
  rating: ratingSchema.required('rating is required'),
  images: imagesSchema.required('images are required'),
  farm: farmSchema.required('farm is required'),
}).strict(true);

export default beefDataValidationSchema;
