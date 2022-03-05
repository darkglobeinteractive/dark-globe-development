import { CATS_FETCHED } from '../actions/types';
/*
categories will look like:
categories = [
  {
    'id': [category_id],
    'title': [category_title],
    'active': boolean (default: true)
  }
]

When the category buttons are clicked on the projects listing page, it toggles 'active' for the item.
*/
export default (categories = [], action) => {

  if (action.type === CATS_FETCHED) {
    return action.payload;
  } else {
    return categories;
  }

};
