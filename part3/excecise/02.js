// write a function call numberType
// your function will receives a one parameter call data
// your function must always return a promise
// if data is not a number, return a promise rejected instantly and give a data "error"
// if data is an odd number, return a promise resolved 1 second later and give a data "odd"
// if data is an even number, return a promise rejected 2 seconds later and give a data "even"

function numberType(data) {
  const dataType = typeof data;
  const allow = dataType === 'number';

  let delay, message;

  if (allow && data % 2 === 0) {
    message = 'even';
    delay = 2000;
  }

  if (allow && data % 2 === 1) {
    message = 'odd';
    delay = 100;
  }

  if (!allow) {
    message = 'error';
  }

  return new Promise((resolve, reject) => {
    if (!allow) {
      reject(message);
    }

    setTimeout(() => {
      resolve(message);
    }, delay);
  });
}

const result = numberType(2)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => console.log(error));
