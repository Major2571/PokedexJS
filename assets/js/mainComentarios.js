const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

fetch(url)
  .then((response) => response.json()) // transformação do response em uma promise do meu body convertido em json; recebe a 'promessa' do fetch

  .then((jsonBody) => console.log(jsonBody)) // sempre o que vai pro segundo then, é o retorno do primeiro; recebo o meu body conertido e printando ele

  .catch((error) => console.error(error)); 
  
  // => ( arrow function ) quando não precisamos fazer a estrutura da function completa, deixando o código mais elegante


  
pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('');
    // " map = pega e mapeia meus pokemons, 
    // convertPokemonToLi() = converte ele em uma li, 
    // join('') = sem nenhum separador, 
    // pokemonList.innerHTML += = e joga no meu html"
