import axios from 'axios';

const API_KEY = '20710280-32e8ecf65799bd35d240b13ea';

const Api = ({ name = '', page = 1 }) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${name}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    )

    .then(res => res.data.hits);
};

export default { Api };
