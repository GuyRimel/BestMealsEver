// pokemonRepository function (IIFE)
let pokemonRepository = (function() {
  // the first object ( pokemonList[0] ) is used as validation for the 'addv()' method
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function loadList() {
    return fetch(apiUrl).then(function(response) {
      return response.json();
    }).then(function(json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function(e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function(response) {
      return response.json();
    }).then(function(details) {
      // now add details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }
  
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function() {
      console.log(pokemon)}).catch(function() {
        console.log(`${pokemon} failed to show...`);
      });
    }
    
      function addListItem(pokemon) {
        let listItem = document.createElement('li');
        let button = document.createElement('button');
    
        button.innerText = `${pokemon.name}`;
        button.classList.add('pokemonTile');
        button.addEventListener('click', function(event) {
          showDetails(pokemon);
          });
    
        listItem.appendChild(button);
        document.querySelector('.pokemon-list').appendChild(listItem);
      }
    
  // 'add' pushes one argument to the pokemonList array WITHOUT validation
  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  // 'addv' pushes input to the pokemonList array WITH validation
  // the first object in pokemonList is considered 'valid'
  // the 'every' method is used to compare the sorted 'input' argument with sorted 'validInput' (comparing sorted 'Object.keys()' arrays) and returns a boolean
  function addv(input) {
    let validInput = Object.keys(pokemonList[0]).sort();

    if(typeof(input) == 'object') {
      let inputArray = Object.keys(input).sort();

      if(inputArray.every((value, index) => value === validInput[index])) {
        pokemonRepository.add(input);
      } else {
        console.log(`input=${input.name} is an object with incorrect keys...`)
      }

    } else {
      console.log(`input=${input} was not valid.`)
    }
  }

  // returns the pokemonList array
  function getAll() {
    return pokemonList;
  }
  
  function phraseHeight(height) {
    let phrase;
    
    if (height >= 6) {
      phrase = `This thing's HUGE! O_O`;
    } else if (height < 6 && height >= 4) {
      phrase = `That's about average o_o`;
    } else if (height < 4 && height >= 2){
      phrase = `Kind of a shorty -_-`;
    } else {
      phrase = `What a tiny little Pokemon! ^o^`;
    }
    
    return phrase;
  }

  // ! -- only the things in this returned object are accessible outside the scope of this function
  return {
    add: add,
    addv: addv,
    getAll: getAll,
    addListItem: addListItem,
    phraseHeight: phraseHeight,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails
  }
})();

pokemonRepository.loadList().then(function() {
  //data loaded in from API
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
