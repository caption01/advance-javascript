function Counter() {
  var counter = 0;

  function increaseCounter() {
    return (counter += 1);
  }

  return increaseCounter;
}
