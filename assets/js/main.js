const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');

const limit = 20;
let offset = 0;

function loadPokemonItens(offset, limit) {

    function convertPokemonToLi(pokemon) {
      return `<div class="pokemon-card-container">
                <div class="pokemon-card ${pokemon.type}">
    
                    <div class="pokemon-card-bg">
                        <div class="bg-pokeball"></div>
                    </div>
    
                    <span class="number">#0${pokemon.number}</span>
                    <h2 class="name">${pokemon.name}</h2>
    
                    <div class="details">
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        </ol>
                        <img src="${pokemon.photo}" alt="${pokemon.name}">
                    </div>
    
                </div>
             </div>`;
    }
    
    
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('');
    });
}

loadPokemonItens(offset, limit);

loadMoreButton.addEventListener('click', () => {
    offset += limit
    loadPokemonItens(offset, limit)
})
