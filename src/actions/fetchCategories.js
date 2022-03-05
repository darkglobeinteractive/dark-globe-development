import { CATS_FETCHED } from './types';
import DGD from '../apis/darkglobedevelopment';

// Fetch all used categories and add them to state
const fetchCategories = cats => async dispatch => {

  // Request custom taxonomy 'project_category' endpoint from cms.darkglobedevelopment.com
  // NOTE: We are converting the array of unique project_category IDs, which are present in existing projects, into a comma-separated string
  const response = await DGD.get(`/project_category`, {
    params: {
      include: cats.join()
    }
  });

  // Create an array of category objects
  const cats_arr = response.data.map(cat => {
    return {
      id: cat.id,
      title: cat.name,
      active: true
    }
  });

  // Call the dispatch function
  dispatch({
    type: CATS_FETCHED,
    payload: cats_arr
  });

}

export default fetchCategories;
