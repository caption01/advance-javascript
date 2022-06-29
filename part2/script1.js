// default export

// module.exports.sum = function sum(x, y) {
//   return x + y;
// };

// funcmodule.exports.minus = function minus(x, y) {
//   return x - y;
// };

// named export

function sum(x, y) {
  return x + y;
}
function minus(x, y) {
  return x - y;
}

module.exports = { sum, minus };
