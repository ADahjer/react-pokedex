import React, {useState, useEffect} from 'react';
import { pokemonByName, pagination } from '../api/api';
import PokeCard from './PokeCard';
import Container from 'react-bootstrap/Container';
import Pagination from './Pagination';

const PokeContainer = () => {
    const [pokemons, setPokemons] = useState([]);
    const [page, setPage] = useState(1);
    
    const fetchPokemons = async () => {
        try {
            const data = await pagination(page);
            const promises = data.results.map(async (pokemon) => {
                return await pokemonByName(pokemon.name);
            });
            const results = await Promise.all(promises);
            setPokemons(results);
            console.log(data);
            console.log(results);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchPokemons();
    }, [page]);

    return (
        <Container className='my-4'>
            <Pagination 
                page={page}
                setPage={setPage}
            />
            <div  className='pokecontainer my-3'>
                {
                    pokemons.map((pokemon) => {
                        return (<PokeCard pokemon={pokemon} key={pokemon.name} />)
                    })
                }
            </div>
            <Pagination 
                page={page}
                setPage={setPage}
            />
        </Container>
    )
}

export default PokeContainer;