import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../components/navigation';
import { pokemonByName } from '../api/api';
import Container from 'react-bootstrap/Container';
import PokemonStats from '../components/PokemonStats';
import Loading from '../components/Loading';
import TypeWeakness from '../components/TypeWeakness';

const PokemonInfo = () => {
    const {id} = useParams();
    const [pokemon, setPokemon] = useState({});
    const [loading, isLoading] = useState(true);

    const fetchPokemon = () => {
        pokemonByName(id)
            .then(data => {
                setPokemon(data);
                isLoading(false);
            });
    }

    useEffect(() => {
        fetchPokemon();
    }, [id]);


    return (
        <div>
            <Navigation />
            <Container className='my-4'>
                {
                    loading ? <Loading /> :
                    <>
                        <h1 className='pokemon_info__name'>{pokemon.name} <span className='pokemon_info__id'>N°{pokemon.id < 10 ? `00${pokemon.id}` : pokemon.id < 100 ? `0${pokemon.id}` : pokemon.id}</span></h1>
                        <div className='pokemon_info__stats'>
                            <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} className='pokemon_info__image'/>
                            <PokemonStats pokemon={pokemon} />
                        </div>

                        <TypeWeakness pokemon={pokemon} />
                    </>
                    
                }
            </Container>
        </div>
    )
}

export default PokemonInfo;