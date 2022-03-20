import { RESET_CATS, SET_FILTERING } from '../actions/types';

// The global.cats_filtered state is a boolean variable indicating whether or not the projects are being filtered
const INITIAL_STATE = {
  'cats_filtered': false
}

export default (globalState = INITIAL_STATE, action) => {
  if (action.type === SET_FILTERING || action.type === RESET_CATS) {
    return { ...globalState, cats_filtered: action.payload }
  } else {
    return globalState;
  };
}
