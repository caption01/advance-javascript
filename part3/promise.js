const myTimerPromise = (timer = 1500) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('timer done !');
    }, timer);

    setTimeout(() => {
      reject('eject request');
    }, 3000);
  });

// myTimerPromise(500)
//   .then((response) => {
//     run();
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const URL = 'https://jsonplaceholder.typicode.com/posts';

const fetchPostPromise = () => {
  return fetch(URL, { method: 'get' })
    .then((response) => {
      const json = response.json();
      return json;
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error.message);
    });
};

function run() {
  fetchPost().then((data) => {
    const userId = data
      .map((d) => d?.userId)
      .filter((id, index, source) => source.indexOf(id) === index);
  });
}

module.exports = { fetchPostPromise };
