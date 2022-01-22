// import functions
export async function getPokedex() {
    let url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';
    const resp = await fetch(url);
    const json = await resp.json();
    return json.results;  
}
//no idea what json does!!! I NTS: look it up 
// I understand that return is grabbign the results but from where?
// set the url to a variable
// set the response to a variable we used to fetch to get the data from the API
// we used await to wait for the response to be ready
//if we do not use await the code will continue to run before the response is ready


// grab DOM elements

// set event listeners 
    // get user input
    // use user input to update state 
    // update DOM to reflect the new state
