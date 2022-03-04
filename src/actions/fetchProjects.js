import { PROJECTS_FETCHED } from './types';
import DGD from '../apis/darkglobedevelopment';
import fetchImage from './fetchImage';

const fetchProjects = () => async dispatch => {

  const response = await DGD.get('/project', {});

  const projects = response.data.map(project => {

    dispatch(fetchImage(project.id, project.featured_media));

    return {
      'id': project.id,
      'title': project.title.rendered,
      'link': project.acf.project_link,
      'ia': project.acf.project_ia,
      'excerpt': project.excerpt.rendered,
      'content': project.content.rendered,
      'category_ids': project.project_category
    }

  });

  dispatch({
    type: PROJECTS_FETCHED,
    payload: projects
  });

}

export default fetchProjects;
