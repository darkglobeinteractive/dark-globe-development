import Axios from 'axios';

export default Axios.create({
  baseURL: 'https://cms.darkglobedevelopment.com/wp-json/wp/v2',
  params: {
    format: 'json'
  }
});
