const { fetchUserPromise } = require('./async-func');
const { fetchPostPromise } = require('./promise');

function fetchDataPromise() {
  console.log('start fetch post! ---');
  fetchPostPromise().then((data) => {
    console.log('fetch post data success ---', data[0]);
  });

  console.log('start fetch users! ---');
  fetchUserPromise().then((data) => {
    console.log('fetch user data success ---', data[0]);
  });
}

async function fetchDataAsync() {
  console.log('start fetch post! ---');
  const posts = await fetchPostPromise();
  console.log('fetch post data success ---', posts[0]);

  console.log('start fetch users! ---');
  const users = await fetchUserPromise();
  console.log('fetch user data success ---', users[0]);
}

// fetchDataPromise()
// fetchDataAsync()
