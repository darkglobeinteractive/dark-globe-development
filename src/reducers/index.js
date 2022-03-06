import { combineReducers } from 'redux';
import imageReducers from './imageReducers';
import globalStateReducers from './globalStateReducers';
import categoryReducers from './categoryReducers';
import projectsReducers from './projectsReducers';

export default combineReducers({
  categories: categoryReducers,
  global: globalStateReducers,
  projects: projectsReducers,
  images: imageReducers
});
