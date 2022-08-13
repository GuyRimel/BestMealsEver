let pokemonList = [
  {
    name: 'Bulbasaur',
    height: 2,
    types: [
      'grass',
      'poison'
    ]
  },
  {
    name: 'Charmander',
    height: 3,
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

poke0 = pokemonList[0];

document.write(`${poke0.name} is ${poke0.height} feet tall and is a ${poke0.types[0]} type.`);