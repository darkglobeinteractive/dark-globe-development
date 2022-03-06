// This action creator is only called on app load
// We fetch the actual content from the WordPress CMS
import _ from 'lodash';
import fetchCategories from './fetchCategories';
import fetchProjects from './fetchProjects';

// This single action creator will populate state on App rendering
const fetchAll = () => async (dispatch, getState) => {

  await dispatch(fetchProjects());

  // Use lodash to create a unique set of categories
  const cats = _.uniq(_.flatten(getState().projects.map((project, index, array) => project.category_ids )));

  // Fetch the category information from the API
  dispatch(fetchCategories(cats));

}

export default fetchAll;
