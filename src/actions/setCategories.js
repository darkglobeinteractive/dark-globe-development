import { SET_CATS, SET_FILTERING } from './types';

const setCategories = id => {

  return (dispatch, getState) => {

    // Get the current filtered state of the app
    const filtered = getState().global.cats_filtered;

    // Set a variable that will determine if we just need to reset all categories to active
    let resetCats = false;

    // If we weren't currently filtering, we're about to be, so toggle that state
    if (!filtered) {
      dispatch({
        type: SET_FILTERING,
        payload: true
      });

    // Otherwise, we need to determine if we need to change the state of filtering
    } else {

      // This variable will contain the boolean value of 'active' the clicked category will have after being clicked
      let activetest;

      // Create the future state of categories
      const futureState = getState().categories.map(cat => {

        // If this is the category we clicked, we want to toggle the boolean value of 'active'
        if (cat.id === id) {

          // IMPORTANT: Set the activetest variable to the new boolean value of 'active' for this category
          activetest = (cat.active ? false : true);

          // And, return the category with the new 'active' value
          return {...cat, active: activetest}

        // Otherwise, just return the category
        } else {
          return cat;
        }

      });

      // Now... if the 'active' boolean value is the same for ALL items in this future state, then we want to reset the filters
      // For example: If ALL items are inactive (this is dumb) or ALL items are active, we don't need individual on/off functionality for the category buttons... just show everything and reset
      resetCats = futureState.every(cat => cat.active === activetest);

      // If we are resetting the categories, then we want to turn-off the global cats_filtered state
      if (resetCats) {
        dispatch({
          type: SET_FILTERING,
          payload: false
        });
      }

    }

    // Finally, set the categories
    dispatch({
      type: SET_CATS,
      payload: {
        id,
        filtered,
        resetCats
      }
    });

  }

}

export default setCategories;
