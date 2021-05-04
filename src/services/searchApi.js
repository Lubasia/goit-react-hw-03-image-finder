import axios from 'axios';

const key = '20731637-53b895fe9420496d3eba14300';

const searchApi = ({ query = '', page = 1 }) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(({ data }) => data.hits);
};

export default searchApi;
