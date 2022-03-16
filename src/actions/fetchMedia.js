import { MEDIA_FETCHED } from './types';
import DGD from '../apis/darkglobedevelopment';

// Add featured image to the state object
const fetchMedia = (project_id, media_id) => async dispatch => {

  // Request media endpoint from cms.darkglobedevelopment.com
  const response = await DGD.get(`/media/${media_id}`, {});

  console.log(response.data);

  // Call the dispatch function
  dispatch({
    type: MEDIA_FETCHED,
    payload: {
      'project_id': project_id,
      'url': response.data.source_url
    }
  });

}

export default fetchMedia;
