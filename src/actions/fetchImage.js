import { IMAGE_FETCHED } from './types';
import DGD from '../apis/darkglobedevelopment';

// Add featured image to the state object
const fetchImages = (project_id, image_id) => async dispatch => {

  // Request media endpoint from cms.darkglobedevelopment.com
  const response = await DGD.get(`/media/${image_id}`, {});

  // Call the dispatch function
  dispatch({
    type: IMAGE_FETCHED,
    payload: {
      'project_id': project_id,
      'image': response.data.media_details.sizes.medium_large.source_url
    }
  });

}

export default fetchImages;
