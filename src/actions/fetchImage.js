import { IMAGE_FETCHED } from './types';
import DGD from '../apis/darkglobedevelopment';

const fetchImages = (project_id, image_id) => async dispatch => {

  const response = await DGD.get(`/media/${image_id}`, {});

  console.log(response);

  dispatch({
    type: IMAGE_FETCHED,
    payload: {
      'project_id': project_id,
      'image': response.data.media_details.sizes.large.source_url
    }
  });

}

export default fetchImages;
