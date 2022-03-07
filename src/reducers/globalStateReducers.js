import { RESET_CATS, SET_FILTERING } from '../actions/types';

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
