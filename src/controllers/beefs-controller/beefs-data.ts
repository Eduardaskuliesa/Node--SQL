import BeefModel from './beef-model';

const beefs: BeefModel[] = [
  {
    id: '1',
    cut: 'Filet Mignon',
    farm: {
      country: 'China',
      name: 'Modern Dairy',
    },
    images: [
      'https://www.certifiedangusbeef.com/cuts/images/detail/FiletMignon.jpg',
      'https://www.certifiedangusbeef.com/cuts/images/detail/Loin-map.gif',
      'https://www.certifiedangusbeef.com/recipes/images/recipes/9f7e283b-ac48-4740-8c40-b0c036756477.jpg',
    ],
    price: 50,
    rating: 5,
  },
  {
    id: '2',
    cut: 'Ribeye',
    farm: {
      country: 'China',
      name: 'Mudanjiang City',
    },
    images: [
      'https://www.certifiedangusbeef.com/cuts/images/detail/Ribeye.jpg',
      'https://www.certifiedangusbeef.com/cuts/images/detail/Rib-map.gif',
      'https://www.certifiedangusbeef.com/recipes/images/recipes/ed7ee3df-e2d1-4512-9a94-40eea2b101e8.jpg',
    ],
    price: 40,
    rating: 5,
  },
  {
    id: '3',
    cut: 'Strip Steak',
    farm: {
      country: 'Australia',
      name: 'Anna Creek',
    },
    images: [
      'https://www.certifiedangusbeef.com/cuts/images/detail/BonelessStripSteak.jpg',
      'https://www.certifiedangusbeef.com/cuts/images/detail/Loin-map.gif',
      'https://www.certifiedangusbeef.com/recipes/images/recipes/3be4c02d-a8f5-4b94-bed9-fec01659a5d6.jpg',
    ],
    price: 30,
    rating: 5,
  },
  {
    id: '4',
    cut: 'Sirloin',
    farm: {
      country: 'China',
      name: 'Modern Dairy',
    },
    images: [
      'https://www.certifiedangusbeef.com/cuts/images/detail/SirloinFilet.jpg',
      'https://www.certifiedangusbeef.com/cuts/images/detail/Loin-map.gif',
      'https://www.certifiedangusbeef.com/recipes/images/recipes/43bea700-62d7-4458-88f6-553100d8af38.jpg',

    ],
    price: 20,
    rating: 4.5,
  },
  {
    id: '5',
    cut: 'T-Bone Steak',
    farm: {
      country: 'China',
      name: 'Mudanjiang City',
    },
    images: [
      'https://www.certifiedangusbeef.com/cuts/images/detail/T-bone.jpg',
      'https://www.certifiedangusbeef.com/cuts/images/detail/Loin-map.gif',
      'https://www.certifiedangusbeef.com/recipes/images/recipes/20ad4aa0-a2fd-45b3-9fc4-5ef69d091c23.jpg',
    ],
    price: 40,
    rating: 5,
  },
  {
    id: '6',
    cut: 'Porterhouse Steak',
    farm: {
      country: 'Australia',
      name: 'Anna Creek',
    },
    images: [
      'https://www.certifiedangusbeef.com/cuts/images/detail/Porterhouse.jpg',
      'https://www.certifiedangusbeef.com/cuts/images/detail/Loin-map.gif',
      'https://www.certifiedangusbeef.com/recipes/images/recipes/20ad4aa0-a2fd-45b3-9fc4-5ef69d091c23.jpg',
    ],
    price: 40,
    rating: 4,
  },
  {
    id: '7',
    cut: 'Brisket',
    farm: {
      country: 'China',
      name: 'Modern Dairy',
    },
    images: [
      'https://www.certifiedangusbeef.com/cuts/images/detail/WholeBrisket.jpg',
      'https://www.certifiedangusbeef.com/cuts/images/detail/Brisket-map.gif',
      'https://www.certifiedangusbeef.com/recipes/images/recipes/cf44ee07-3076-4f9e-b65d-ea2a8fc602f9.jpg',
    ],
    price: 20,
    rating: 5,
  },
  {
    id: '8',
    cut: 'Chuck Roast',
    farm: {
      country: 'China',
      name: 'Mudanjiang City',
    },
    images: [
      'https://www.certifiedangusbeef.com/cuts/images/detail/ChuckRoast.jpg',
      'https://www.certifiedangusbeef.com/cuts/images/detail/Chuck-map.gif',
      'https://www.certifiedangusbeef.com/recipes/images/recipes/74531bd8-a019-4c99-a272-1cf1eed29db5.jpg',
    ],
    price: 20,
    rating: 3,
  },
  {
    id: '9',
    cut: 'Short Ribs',
    farm: {
      country: 'Australia',
      name: 'Anna Creek',
    },
    images: [
      'https://www.certifiedangusbeef.com/cuts/images/detail/Bone-inPlateShortRibs.jpg',
      'https://www.certifiedangusbeef.com/cuts/images/detail/Plate-map.gif',
      'https://www.certifiedangusbeef.com/recipes/images/recipes/d9cedaed-f508-490f-b606-d31aa0c37cb6.jpg',
    ],
    price: 20,
    rating: 4,
  },
  {
    id: '10',
    cut: 'Flank Steak',
    farm: {
      country: 'China',
      name: 'Modern Dairy',
    },
    images: [
      'https://www.certifiedangusbeef.com/cuts/images/detail/Flank.jpg',
      'https://www.certifiedangusbeef.com/cuts/images/detail/Flank-map.gif',
      'https://www.certifiedangusbeef.com/recipes/images/recipes/fa699f88-8716-4272-bc7b-da0859d0acca.jpg',
    ],
    price: 30,
    rating: 3,
  },
  {
    id: '11',
    cut: 'Skirt Steak',
    farm: {
      country: 'China',
      name: 'Mudanjiang City',
    },
    images: [
      'https://www.certifiedangusbeef.com/cuts/images/detail/InsideSkirt.jpg',
      'https://www.certifiedangusbeef.com/cuts/images/detail/Plate-map.gif',
      'https://www.certifiedangusbeef.com/recipes/images/recipes/5ef89e2d-c981-4516-9c9a-de2fdfa319d1.jpg',
    ],
    price: 20,
    rating: 4,
  },
  {
    id: '12',
    cut: 'Top Round Steak',
    farm: {
      country: 'Australia',
      name: 'Anna Creek',
    },
    images: [
      'https://www.certifiedangusbeef.com/cuts/images/detail/TopRoundSteak.jpg',
      'https://www.certifiedangusbeef.com/cuts/images/detail/Round-map.gif',
      'https://www.certifiedangusbeef.com/recipes/images/recipes/1a565d92-1c70-458b-8d54-003a13e8b6c0.jpg',
    ],
    price: 15,
    rating: 4.5,
  },

];
export default beefs;
