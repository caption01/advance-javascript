// string padding [ padStart(), padEnd() ]
const word = 'Hey!!';
word.padStart(10);
word.padEnd(10);

// tailing comma in function
const combine = (x, y, z) => {
  return `${x}-${y}-${z}`;
};

combine('a', 'b', 'c');

// [ Object.values, Object.entries ]
const userInfo = {
  username: 'admin',
  password: '123456',
  sex: 'M',
};

Object.keys(userInfo).forEach((key) => {
  console.log(`${key} - ${userInfo[key]}`);
});

Object.values(userInfo).forEach((val) => {
  console.log(val);
});

Object.entries(userInfo).forEach((data) => {
  const [key, val] = data;
  console.log(`${key} - ${val}`);
});

// Async Await
