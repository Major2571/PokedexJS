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


function filterPokemonBy(value) {

    let buttons = document.querySelectorAll(".button-value");
    
    buttons.forEach((button) => {

        if (value == 'all') {
            button.classList.remove("inactive");
            button.classList.add("active");

        }
        else if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
            button.classList.remove("inactive");

        } else {
            button.classList.remove("active");
            button.classList.add("inactive");
        }
    });

    let typePokeSearch = document.querySelectorAll('.pokemon-card-container');

    typePokeSearch.forEach(pokemon => {

        if (value == "all") {

            pokemon.classList.remove("hide");
            pokemon.style.display = '';

            loadMoreButton.disabled = false;
            loadMoreButton.style.display = 'block';

        } else {

            if (pokemon.classList.contains(value)) {

                pokemon.classList.remove("hide");
                pokemon.style.display = '';

                loadMoreButton.disabled = true;
                loadMoreButton.style.display = 'none';
                
            } else {

                pokemon.classList.add("hide");
                pokemon.style.display = 'none';

                loadMoreButton.disabled = true;
                loadMoreButton.style.display = 'none';

            }

        }
    });
}
