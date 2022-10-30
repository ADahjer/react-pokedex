export const pokemonByName = async (name) => {
    const url = 'https://pokeapi.co/api/v2/pokemon/';
    const result = await fetch(url + name);
    const data = await result.json();
    return data;
}

export const pagination = async (limit = 20) => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`;
    const result = await fetch(url);
    const data = await result.json();
    return data;
}