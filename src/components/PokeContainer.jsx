import React, {useState, useEffect} from 'react';
import { pokemonByName, pagination, limit } from '../api/api';
import PokeCard from './PokeCard';
import Container from 'react-bootstrap/Container';
import Pagination from './Pagination';
import Loading from './Loading';

const PokeContainer = () => {
    const [pokemons, setPokemons] = useState([]);
    const [loading, isLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    
    const fetchPokemons = async () => {
        try {
            const data = await pagination(page);
            const promises = data.results.map(async (pokemon) => {
                return await pokemonByName(pokemon.name);
            });
            const results = await Promise.all(promises);
            setPokemons(results);
            setTotal(Math.ceil(data.count/limit));
            isLoading(false);
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
                isLoading={isLoading}
                totalPages={total}
            />
            {
                loading ?
                <Loading />
                :
                <div  className='pokecontainer my-3'>
                {
                    pokemons.map((pokemon) => {
                        return (<PokeCard pokemon={pokemon} key={pokemon.name} />)
                    })
                }
                </div>
            }
            <Pagination 
                page={page}
                setPage={setPage}
                isLoading={isLoading}
                totalPages={total}
            />
        </Container>
    )
}

export default PokeContainer;