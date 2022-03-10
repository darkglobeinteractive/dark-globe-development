import { PROJECTS_FETCHED } from './types';
import DGD from '../apis/darkglobedevelopment';
import fetchImage from './fetchImage';
import fetchMedia from './fetchMedia';

const fetchProjects = () => async (dispatch, getState) => {

  // Request project endpoing from cms.darkglobedevelopment.com
  const response = await DGD.get('/project', {});

  // Cycle through each project in the response
  const projects = response.data.map(project => {

    // Call the fetchImage action creator to add the featured image for the project to state
    dispatch(fetchImage(project.id, project.featured_media));

    // If the information architecture field isn't blank, use fetchMedia to add the file to state
    if (project.acf.project_ia !== '') {
      dispatch(fetchMedia(project.id, project.acf.project_ia));
    }

    // Generate the state object for this project
    return {
      'id': project.id,
      'title': project.title.rendered,
      'project_link': project.acf.project_link,
      'project_source': project.acf.project_source,
      'excerpt': project.excerpt.rendered,
      'content': project.content.rendered,
      'category_ids': project.project_category,
      'active': true
    }

  });

  // Call the dispatch function
  dispatch({
    type: PROJECTS_FETCHED,
    payload: projects
  });

}

export default fetchProjects;
