let result = [];

// change var -> let
for (var i = 0; i < 5; i++) {
  result[i] = function () {
    return i;
  };
}

console.log(result[0]());
