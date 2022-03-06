import { SET_FILTERING } from '../actions/types';

const INITIAL_STATE = {
  'cats_filtered': false
}

export default (globalState = INITIAL_STATE, action) => {
  if (action.type === SET_FILTERING) {
    return { ...globalState, cats_filtered: action.payload }
  } else {
    return globalState;
  };
}
