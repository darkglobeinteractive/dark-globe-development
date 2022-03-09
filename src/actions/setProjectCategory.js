// One of the category buttons in a project grid item was clicked
import { SET_CATS, SET_FILTERING, SET_PROJECTS } from './types';

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

    // Set projects by sending along active category IDs
    dispatch({
      type: 'SET_PROJECTS',
      payload: [id]
    });

  }

}

export default setProjectCategory;
