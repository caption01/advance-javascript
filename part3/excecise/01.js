// write function call promiseJob which must return promise object.
// promise must resolve itself 2 seconds after call to promiseJob and provide hello world

function promiseJob() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('hello world');
    }, 2000);
  });
}

promiseJob();
