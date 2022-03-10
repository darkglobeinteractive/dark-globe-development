import { MEDIA_FETCHED } from '../actions/types';

export default (media = [], action) => {

  if (action.type === MEDIA_FETCHED) {
    return [...media, action.payload];
  } else {
    return media;
  }

};
