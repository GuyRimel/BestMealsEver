// mealRepository function (IIFE)
let mealRepository = (
  function() {
    let mealList = [
      {
        name: 'Steamed Snowcrab Legs',
        categories: ['seafood', 'healthy', 'meat'],
        price: '$$$',
        rating: 10
      }
    ];

    // 'add' pushes one argument to the mealList array WITHOUT validation
    function add(meal) {
      mealList.push(meal);
    }

    // 'addv' pushes one argument to the mealList array WITH validation
    function addv(input) {
      if (typeof(input) != 'object') {
        return;
      } else {
          // during validation vString must be EXACTLY equal to a string of all object keys from the input argument
          let vString = '';
          vString = Object.keys(input).forEach(function(input) { 
          vString = input + vString;
          console.log(`vString = '${vString}'`);
          });
          // IMPORTANT! vString must be this exact value to pass the test!
          if (vString == 'ratingpricecategoriesname') {
            add(input);
          } else {
            return
          }
      }
    }

    // returns the entire mealList array
    function getAll() {
      return mealList;
    }

    // only the things in this returned object are accessible outside the scope of this function
    return {
      add: add,
      addv: addv,
      getAll: getAll
    }
  }
)();

// This loop evaluates the height of each pokemon in the pokemonList array and writes a string to the document.
// the 'poke' value is set to pokemon object at the current index
// the 'phrase' value is determined by the pokemon's height

mealRepository.getAll().forEach(
  function(meal) {
    let ratingPhrase;
    let rating = meal.rating;
    if (rating >= 8) {
      ratingPhrase = `Rating: ${rating}. This is awesome!`;
    } else if (rating < 8 || rating >= 5) {
      ratingPhrase = `Rating: ${rating} this is pretty good!`;
    } else {
      phrase = `Rating: ${rating} this is gross, apparently.`;
    }
    
    document.write(`${meal.name}<br>`);
    document.write(`Price: ${meal.price}<br>`);
    document.write(ratingPhrase);

    }
);

mealRepository.addv('rat-stew');

console.log(mealRepository.getAll());

mealRepository.addv(
  {
    name: 'dog-stew',
    categories: [],
    price: '$',
    rating: 2.1
  }
);

console.log(mealRepository.getAll());