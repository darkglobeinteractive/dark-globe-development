import { IMAGE_FETCHED } from '../actions/types';

export default (images = [], action) => {

  if (action.type === IMAGE_FETCHED) {
    return [...images, action.payload];
  } else {
    return images;
  }

};
