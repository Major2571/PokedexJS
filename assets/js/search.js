const pokeSearch = document.getElementById('pokeSearch');

pokeSearch.addEventListener('keyup', e => {
    let currentValue = e.target.value.toLowerCase();
    let pokemonName = document.querySelectorAll('h2.name');

    pokemonName.forEach(pokemon => {

        if (pokemon.textContent.toLowerCase().includes(currentValue)) {
            pokemon.parentNode.parentNode.style.display = 'block';
            loadMoreButton.disabled = false;
            loadMoreButton.style.display = 'block';

        } else {
            pokemon.parentNode.parentNode.style.display = 'none';
            loadMoreButton.disabled = true;
            loadMoreButton.style.display = 'none';
        }

    });
});