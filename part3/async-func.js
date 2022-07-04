const axios = require('axios').default;

const URL = 'https://jsonplaceholder.typicode.com/users';

const fetchUserAsync = async () => {
  const response = await axios.get(URL);
  const users = response.data;
  return users;
};

const fetchUserPromise = () => {
  return axios
    .get(URL)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

async function run() {
  const users = await fetchUserAsync();
}

module.exports = { fetchUserPromise };
