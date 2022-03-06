import { CATS_FETCHED, SET_CATS } from '../actions/types';
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

  // We are setting the categories from the API here
  if (action.type === CATS_FETCHED) {
    return action.payload;

  // We have clicked a category button, --BUT-- the 'active' value of ALL items were the same, so we're resetting
  } else if (action.type === SET_CATS && action.payload.resetCats) {
    return categories.map(cat => {
      return {...cat, active: true}
    });

  // We have clicked a category button --AND-- we weren't already filtering, so set the clicked item to 'active: true' and the reset to 'active: false'
  } else if (action.type === SET_CATS && !action.payload.filtered) {
    return categories.map(cat => {
      return {...cat, active: (cat.id === action.payload.id ? true : false )}
    });

  // We have clicked a category button --AND-- we were already filtering --AND-- we obviously didn't need to reset, so just toggle the category in question
  } else if (action.type === SET_CATS && action.payload.filtered) {
    return categories.map(cat => {
      if (cat.id === action.payload.id) {
        return {...cat, active: ( cat.active ? false : true )}
      } else {
        return cat;
      }
    });

  // Otherwise, you know, just return the current categories
  } else {
    return categories;
  }

};
