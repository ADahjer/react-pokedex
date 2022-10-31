import React, { useEffect, useState } from 'react';
import { customSeach } from '../api/api';
import Loading from './Loading';

const PokemonStats = ({pokemon}) => {

    const [description, setDescription] = useState('');
    const [ability, setAbility] = useState('');
    const [loading, isLoading] = useState(true);

    const getDescription = async () => {
        const promises = [];
        promises.push(await customSeach(pokemon.species.url));
        promises.push(await customSeach(pokemon.abilities[0].ability.url));
        const results = await Promise.all(promises);
        console.log(results);
        let desc = results[0].flavor_text_entries.find(entry => entry.language.name === 'en');
        desc = desc.flavor_text.replace('', ' ').toLowerCase();
        setDescription(desc);
        setAbility(results[1])
        isLoading(false);
    }

    useEffect(() => {
        getDescription();
    }, [pokemon]);

    return (
        <div>
            {
                loading ?
                <Loading /> :
                <div>
                    <p className='pokemon_info__description'>"{description}"</p>
                    <div className={`pokemon_info__information ${pokemon.types[0].type.name}`}>
                        <div className='stat'>
                            <p className='stat__title'>Height</p>
                            <p className='stat__desc'>{pokemon.height / 10} m</p>
                        </div>
                        <div className=' stat'>
                            <p className='stat__title'>Weight</p>
                            <p className='stat__desc'>{pokemon.weight / 10} Kg</p>
                        </div>
                        <div className='stat'>
                            <p className='stat__title'>Ability</p>
                            <p className='stat__desc'>{ability.name}</p>
                        </div>
                        <div className='stat'>
                            <p className='stat__title'>{ability.name}</p>
                            <p className='stat__desc'>{ability.flavor_text_entries[0].flavor_text}</p>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default PokemonStats;