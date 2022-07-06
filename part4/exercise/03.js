let result = [];

for (var i = 0; i < 5; i++) {
  result[i] = (function inner(x) {
    return function () {
      return x;
    };
  })(i);
}

console.log(result[0]());
