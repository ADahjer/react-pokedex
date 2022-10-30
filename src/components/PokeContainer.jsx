import React, {useState, useEffect} from 'react';
import { pokemonByName, pagination } from '../api/api';
import PokeCard from './PokeCard';
import Container from 'react-bootstrap/Container';

const PokeContainer = () => {
    const [pokemons, setPokemons] = useState([]);
    
    const fetchPokemons = async () => {
        try {
            const data = await pagination();
            const promises = data.results.map(async (pokemon) => {
                return await pokemonByName(pokemon.name);
            });
            const results = await Promise.all(promises);
            setPokemons(results);
            console.log(results);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchPokemons();
    }, []);

    return (
        <Container className='pokecontainer'>
            {
                pokemons.map((pokemon) => {
                    return (<PokeCard pokemon={pokemon} key={pokemon.name} />)
                })
            }
        </Container>
    )
}

export default PokeContainer;