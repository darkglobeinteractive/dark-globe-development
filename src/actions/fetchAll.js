import _ from 'lodash';
import fetchCategories from './fetchCategories';
import fetchProjects from './fetchProjects';

// This single action creator will populate state on App rendering
const fetchAll = () => async (dispatch, getState) => {

  console.log('got here first');

  await dispatch(fetchProjects());

  // Use lodash to create a unique set of categories
  const cats = _.uniq(_.flatten(getState().projects.map((project, index, array) => project.category_ids )));

  dispatch(fetchCategories(cats));

}

export default fetchAll;
