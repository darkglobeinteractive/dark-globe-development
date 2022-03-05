import { PROJECTS_FETCHED } from '../actions/types';

export default (projects = [], action) => {

  if (action.type === PROJECTS_FETCHED) {
    return action.payload;
  } else {
    return projects;
  }
};
