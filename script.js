/* Project: build a Pokemon rock, paper, scissors game */
// Step 1: create elements & assign value
// Step 2: create function to loop through pokemons on click
// Step 3: 
// Step 4: 
// Step 5: 


/* ELEMENTS */ 
// var pokemonsEl = document.querySelector('.select-screen').querySelectorAll('.character');
var pokemonsEl = document.querySelectorAll('.character');
var gameState = {
  userPokemon: "",
  rivalPokemon: ""
};


/* FUNCTIONS */
// console.log(pokemonsEl);
var i = 0;
while (i < pokemonsEl.length){
pokemonsEl[i].onclick = function(){
  var pokemonName = this.dataset.pokemon;
  console.log(`i pressed this pokemon ` + pokemonName);
  gameState.pokemon = pokemonName;

  cpuPick();
  console.log(gameState);
  }
  i++;
}

function randomNumber(min, max){
  return Math.floor(Math.random() * (max - min)) + min;
}

function cpuPick(){
  pokemonsEl[randomNumber(0, 3)].dataset.pokemon;
  gameState.rivalPokemon = pokemonsEl[randomNumber(0, 3)].dataset.pokemon;
}
