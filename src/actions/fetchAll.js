import _ from 'lodash';
import fetchProjects from './fetchProjects';

// This single action creator will populate state on App rendering
const fetchAll = () => async (dispatch, getState) => {

  await dispatch(fetchProjects());

  // Use lodash to create an array of unique category IDs from all projects and set categories state

}

export default fetchAll;
