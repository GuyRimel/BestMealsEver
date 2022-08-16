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
    ],
    speak: function() {
      console.log(`squirt! my name is ${this.name}!`);
    }
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

function add(v1, v2) {
  return v1 + v2;
}
let number = add(3, 5);
console.log(add(4, 2) + number);

let message = function() {
  console.log(`The number is ${number}`);
}

message();

let sayHello = function(firstName) {
  console.log('Hello ' + firstName)
}

sayHello("Bobby");
sayHello();

function divide(dividend, divisor) {
  if (divisor == 0) {
    return 'you are trying to divide by zero, DUMMY.';
  } else {
    let result = dividend / divisor;
    return result;
  }
}

console.log(divide(4, 2));
console.log(divide(7, 0));
console.log(divide(12, -2));
console.log(divide(12, 5));

// a function with a return statement
function add(num1, num2) {
  return num1 + num2;
}

let result = add(5, 7);
console.log(result);

pokemonList[2].speak();

let multiplyBy5 = num => num * 5;

console.log(multiplyBy5(3));

let multiplyTwoNumsAnd10 = (num1, num2) => {
  return num1 * num2 * 10;
}

console.log(multiplyTwoNumsAnd10(3, 5));

console.warn('you are in DANGER!');
console.error('something went WRONG.');

function pokeSpeak() {
  pokemonList[2].speak();
}

// setTimeout(pokeSpeak, 5000);

let pets = [];
let pet1 = {
  name: 'Pokey'
}

pets.push(pet1.name);
pets.push('Miles');
pets.unshift('Sandy');
pets.push('Ash');
let pets2 = pets.slice();
pets.sort();

console.log(pets);
console.log(pets.indexOf('Miles'));
console.log(pets2.indexOf('Miles'));