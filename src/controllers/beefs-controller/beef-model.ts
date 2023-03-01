type BeefModel = {
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

export default BeefModel;

export type BeefData = Omit<BeefModel, 'id'>;

export type PartialBeefData = Partial<BeefData>;
