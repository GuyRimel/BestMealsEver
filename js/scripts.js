let pokemonList = [
  {
    name: 'Bulbasaur',
    height: 1.49,
    types: [
      'grass',
      'poison'
    ]
  },
  {
    name: 'Charmander',
    height: 5,
    types: [
      'fire',
      'orange lizard'
    ]
  },
  {
    name: 'Squirtle',
    height: 3,
    types: [
      'water',
      'squirter',
      'turtle',
      'cool'
    ]
  }
];

// This loop evaluates the height of each pokemon in the pokemonList array and writes a string to the document.
// the 'poke' value is set to pokemon object at the current index
// the 'phrase' value is determined by the pokemon's height
let poke;
let phrase;
for (i = 0; i < pokemonList.length; i++) {
  poke = pokemonList[i];
  if (poke.height > 3) {
    phrase = 'Woa, that\'s big!';
  } else if (poke.height < 1.5) {
    phrase = 'Pft, that\'s tiny.'
  } else {
    phrase = 'That\'s about average size.'
  }

  document.write(
    `${poke.name} is ${poke.types[0]}y and ${poke.height} feet tall. ${phrase}<br>`
  );
}