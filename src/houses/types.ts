import { RowDataPacket } from 'mysql2';

type PrivateViewBeefModel = {
  id: string,
  cut: string,
  farm : {
    country: string,
    name: string,
  }
  images: string[],
  price: number,
  rating: number
};

export type BeefViewModel = PrivateViewBeefModel & RowDataPacket;

export type BeefData = Omit<PrivateViewBeefModel, 'id'>;

export type PartialBeefData = Partial<BeefData>;
