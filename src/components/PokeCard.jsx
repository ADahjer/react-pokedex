import React from 'react';
import { Link } from 'react-router-dom';

const PokeCard = ({pokemon}) => {

    const types = pokemon.types.map((slot) => {
        return slot.type.name;
    });

    return (
        <Link to={`/pokemon/${pokemon.name}`} className={`pokecard ${[types[0]]}`}>
            <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} className='card__img' />
            <div className='card__text'>
                <div className='pokemon__id'>#{pokemon.id}</div>
                <h2 className='pokemon__name'>{pokemon.name}</h2>
                <div className='pokemon__types'>
                        {
                            types.map((type, idx) => {
                                return (<span className={`poketype ${type}`} key={idx}>{type} </span>)
                            })
                        }
                </div>
            </div>
        </Link>
    )
}

export default PokeCard;