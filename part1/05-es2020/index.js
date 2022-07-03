const pokemon = {
  atk: undefined,
  def: 100,
};

// Nullish Colescing Operator
const pokeAtk = pokemon.atk ?? 0;

// Optional Chaining Operator
const pokeName =
  pokemon.name && pokemon.name.nickname && pokemon.name.nickname.long;

const pokeName2 = pokemon?.name?.nickname?.long;

// globalThis
const say = () => console.log('hello!');
globalThis.setTimeout(say, 1000);
