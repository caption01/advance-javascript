var a1 = 10;

function run() {
  var a1 = 20;

  function slow() {
    console.log(a1);
  }

  exec(slow);
}

function exec(func) {
  var a1 = 30;
  func(); // assige a1 to func(a1)
}

run();
