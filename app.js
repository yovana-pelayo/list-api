import { getPokedex, getStarWarsPeople } from ".api/fetch.js";

const list = document.querySelector("#list");
const template = document.querySelector('#template');
const selectEl = document.querySelector('select');
// console.log(template, selectedEl);
//why is this selected instead of select? this means selecting an element not the select tag!

async function loadPokedex() {
const pokedex = await getPokedex();
list.classList.add('pokemon');
for ( let pokemon of pokedex) {
    const clone = template.content.cloneNode(true);
const Fantasy = clone.querySelector(h1)
const name = clone.querySelector('h2');
const image = clone.querySelector('img');
const type = clone.querySelector('h6');
}
console.log(pokemon, name,image);

name.textContent = 'Name: ' + pokemon.pokemon;
type.textContent = 'Egg: ' + pokemon.egg_group_1;
image.src = pokemon.url_image;
image.alt = pokemon.pokedex;
list.appendChild(clone);
    }

selectEl.addEventListener('change', async (e) => {
    const selected = e.target.value;
    if (selected === 'pokemon') {

    }
} list.innerHTML = '';
await loadPokedex();
} else if (selected === 'star-wars') {
    list.innerHTML = '';
    await loadStarWars();
}
});
// grab DOM elements

// set event listeners //
    // get user input//
    // use user input to update state //
    // update DOM to reflect the new state//
