import _ from 'lodash';
import fetchImages from './fetchImages';
import fetchProjects from './fetchProjects';

const fetchAll = () => async (dispatch, getState) => {

  await dispatch(fetchProjects());

  

}

export default fetchAll;
