import { PROJECTS_FETCHED, SET_PROJECTS } from '../actions/types';

export default (projects = [], action) => {

  if (action.type === PROJECTS_FETCHED) {

    return action.payload;

  } else if (action.type === SET_PROJECTS) {

    // Cycle through each project
    return projects.map(project => {

      // Set boolean variable indicating not to include project by default
      let includeProject = false;

      // Cycle through each ID in this project's category_ids array
      project.category_ids.forEach(cat => {

        // If the current category ID is in the active category array (which is action.payload) update the includeProject boolean
        if (action.payload.indexOf(cat) !== -1) {
          includeProject = true;
        }

      });

      // Return the project with the accurate 'active' state
      return {...project, active: includeProject};

    });

  } else {

    return projects;

  }

};
