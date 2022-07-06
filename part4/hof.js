function f(x) {
  return function (y) {
    return function () {
      // do something with x and y
    };
  };
}

// with HOF
const numbers = [1, 2, 3, 4, 5, 6, 7];
const isGreaterThan = (x) => x > 4;
numbers.filter(isGreaterThan); // [5, 6, 7]

// without HOF
const filtered = [];
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > 4) {
    filtered.push(numbers[i]);
  }
}

function buildMyCalculator(lang) {
  const calLang = lang;

  const systemLang = {
    th: 'ผลลัพธ์เท่ากับ',
    en: 'The Total is',
  };

  const message = systemLang[calLang];

  return {
    sum: (n1, n2) => {
      const result = n1 + n2;
      console.log(`${message} ${result}`);
    },
    minus: (n1, n2) => {
      const result = n1 - n2;
      console.log(`${message} ${result}`);
    },
  };
}

function buildMyCalculatorV2() {
  const systemLang = {
    th: 'ผลลัพธ์เท่ากับ',
    en: 'The Total is',
  };
  return {
    sum: (n1, n2, lang) => {
      const message = systemLang[lang];
      const result = n1 + n2;
      console.log(`${message} ${result}`);
    },
    minus: (n1, n2, lang) => {
      const message = systemLang[lang];
      const result = n1 - n2;
      console.log(`${message} ${result}`);
    },
  };
}

const thCal = buildMyCalculator('th');
thCal.sum(10, 20);

const enCal = buildMyCalculator('en');
enCal.minus(100, 60);

const xCal = buildMyCalculatorV2();
xCal.sum(30, 40, 'th');
