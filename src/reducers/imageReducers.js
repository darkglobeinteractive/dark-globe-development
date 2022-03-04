import { IMAGE_FETCHED } from '../actions/types';

export default (images = [], action) => {
  switch (action.type) {
    case IMAGE_FETCHED:
      return [...images, action.payload];
    default:
      return images;
  }
};
