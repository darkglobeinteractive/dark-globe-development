import { PROJECTS_FETCHED } from './types';
import DGD from '../apis/darkglobedevelopment';
import fetchImage from './fetchImage';

const fetchProjects = () => async (dispatch, getState) => {

  // Request project endpoing from cms.darkglobedevelopment.com
  const response = await DGD.get('/project', {});

  // Cycle through each project in the response
  const projects = response.data.map(project => {

    // Call the fetchImage action creator to add the featured image for the project to state
    dispatch(fetchImage(project.id, project.featured_media));

    // Generate the state object for this project
    return {
      'id': project.id,
      'title': project.title.rendered,
      'project_link': project.acf.project_link,
      'project_source': project.acf.project_source,
      'ia': project.acf.project_ia,
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
