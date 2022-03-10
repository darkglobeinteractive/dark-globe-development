import { combineReducers } from 'redux';
import imageReducers from './imageReducers';
import globalStateReducers from './globalStateReducers';
import categoryReducers from './categoryReducers';
import mediaReducers from './mediaReducers';
import projectsReducers from './projectsReducers';

export default combineReducers({
  categories: categoryReducers,
  global: globalStateReducers,
  media: mediaReducers,
  projects: projectsReducers,
  images: imageReducers
});
