function run(a1) {
  let b1 = a1;

  return function () {
    b1 += 10;
    return b1;
  };
}

const fn = run(50);
fn();
console.log(fn());
