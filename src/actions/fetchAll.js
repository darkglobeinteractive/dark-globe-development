import _ from 'lodash';
import fetchProjects from './fetchProjects';

// This single action creator will populate state on App rendering
const fetchAll = () => async (dispatch, getState) => {

  await dispatch(fetchProjects());

}

export default fetchAll;
