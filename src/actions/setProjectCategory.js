import { SET_CATS, SET_FILTERING } from './types';

// One of the category buttons in a project grid item was clicked
const setProjectCategory = id => {

  return dispatch => {

    // Set the CategoryCloud bar to filtering
    dispatch({
      type: SET_FILTERING,
      payload: true
    });

    // Set the categories state
    dispatch({
      type: SET_CATS,
      payload: {
        id,
        filtered: false,
        resetCats: false
      }
    });

  }

}

export default setProjectCategory;
