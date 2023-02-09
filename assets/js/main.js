const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');

let offset = 0;
let limit = 151;

function convertPokemonToLi(pokemon) {
    return `<div class="pokemon-card-container ${pokemon.types.map((type) => `${type}`).join(' ')}">
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

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit);

loadMoreButton.addEventListener('click', () => {
    offset += limit
    loadPokemonItens(offset, limit)
})


// Pokemon's abilities map:
// ${ pokemon.abilities.map((ability) => `<li class="ability ${ability}">${ability}</li>`).join('') }