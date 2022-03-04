import { combineReducers } from 'redux';
import imageReducers from './imageReducers';
import projectsReducers from './projectsReducers';

export default combineReducers({
  projects: projectsReducers,
  images: imageReducers
});
