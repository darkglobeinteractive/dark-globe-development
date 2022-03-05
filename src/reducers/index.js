import { combineReducers } from 'redux';
import imageReducers from './imageReducers';
import categoryReducers from './categoryReducers';
import projectsReducers from './projectsReducers';

export default combineReducers({
  categories: categoryReducers,
  projects: projectsReducers,
  images: imageReducers
});
