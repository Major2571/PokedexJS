const pokeApi = {};

function convertPokemonDetailToPokemon(pokeDetail){
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.home.front_default

    // Pokemon's weight, height and ability
    // pokemon.weight = pokeDetail.weight
    // pokemon.height = pokeDetail.height

    // const abilities = pokeDetail.abilities.map((typeSlot) => typeSlot.ability.name)
    // const [ability] = abilities
    // pokemon.abilities = abilities
    // pokemon.ability = ability

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokemonDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequets) => Promise.all(detailRequets))
        .then((pokemonsDetails) => (pokemonsDetails))
        
}


