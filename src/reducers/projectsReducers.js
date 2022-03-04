import { PROJECTS_FETCHED } from '../actions/types';

export default (projects = [], action) => {
  switch (action.type) {
    case PROJECTS_FETCHED:
      return action.payload;
    default:
      return projects;
  }
};
