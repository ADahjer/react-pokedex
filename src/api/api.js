export const limit = 20;

export const pokemonByName = async (name) => {
    const url = 'https://pokeapi.co/api/v2/pokemon/';
    const result = await fetch(url + name);
    const data = await result.json();
    return data;
}

export const pagination = async (page) => {
    // ex: if page = 1, then (1 * 20) - 20 = 0. and if page = 2, then (2 * 20) - 20 = 20
    const offset = (page * limit) - limit;
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const result = await fetch(url);
    const data = await result.json();
    return data;
}