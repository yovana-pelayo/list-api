// import functions
export async function getPokedex() {
    let url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';
    const resp = await fetch(url);
    const json = await resp.json();
    return json.results; }

//no idea what json does!!! I NTS: look it up 
// I understand that return is grabbing the results but from where?
// set the url to a variable
// set the response to a Pr the response to be ready
//if we do not use await the code will continue to run before the response is ready
export async function getStarWarsPeople() {
    let url = 'https://swapi.dev/api/people';
    const resp = await fetch(url);
    const json = await resp.json();
    return json.results;
}
