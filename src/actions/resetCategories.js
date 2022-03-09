// The reset button in the Category Cloud was clicked
import { RESET_CATS, SET_PROJECTS } from './types';

const resetCategories = () => {

  return (dispatch, getState) => {

    dispatch({
      type: RESET_CATS
    });

    // Create an empty array to contain list of active category IDs
    const cats = [];

    // Return all category IDs because all are active
    getState().categories.forEach(cat => {
      cats.push(cat.id);
    });

    // Set projects by sending along active category IDs
    dispatch({
      type: 'SET_PROJECTS',
      payload: cats
    });

  }

}

export default resetCategories;
