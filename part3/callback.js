const axios = require('axios').default;
const { readFile, promises: fsPromises } = require('fs');

function readTextFileWithCallback(file) {
  console.log('readfile with callback ---');
  readFile(file, function (error, filedata) {
    if (error) return console.error(error);

    const data = filedata.toString();
    const movies = data.split(',');
    console.log(movies);
  });
}

// readTextFileWithCallback('./data/movies.txt');

function readFilePromise(file) {
  console.log('readfile with promise ---');
  fsPromises.readFile(file, 'utf-8').then((data) => {
    const movies = data.split(',');
    console.log(movies);
  });
}

// readFilePromise('./data/movies.txt');

function myFetcher(url = '', handler = {}) {
  const { onSuccess, onError } = handler;

  axios
    .get(url)
    .then((response) => {
      const data = response.data;
      onSuccess(data);
    })
    .catch((error) => {
      // to something..
      onError(error);
    });
}

const TODO_URL = 'https://jsonplaceholder.typicode.com/todos';

const countToDo = (todos = []) => {
  const complete = todos.reduce((acc, todo) => {
    if (todo?.completed) {
      return acc + 1;
    }
    return acc;
  }, 0);

  console.log('Todo Success', complete);
  console.log('From Total', todos.length);
};

const showErrors = (error) => {
  console.log(error.message);
};

myFetcher(TODO_URL, {
  onSuccess: (data) => countToDo(data),
  onError: (error) => showErrors(error),
});
