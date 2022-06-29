const fruits = [
  '🍏',
  '🍎',
  '🍐',
  '🍊',
  [['🍋']],
  '🍌',
  ['🍉', '🍇', '🍓', '🫐'],
];
// flat() faltMap()
const flatFruit = fruits.flatMap((f) => `${f}`);

// trimStart() trimEnd()
const tense = '       I was in a middle       ';
tense.trimStart();
tense.trimEnd();

// Object.fromEntries()
const items = [
  ['name', 'john'],
  ['age', 20],
];

const obj = Object.fromEntries(items);
const newItems = Object.entries(obj);

// try catch block
try {
  pig + 10;
} catch (err) {
  console.log('something error', err.message);
}
