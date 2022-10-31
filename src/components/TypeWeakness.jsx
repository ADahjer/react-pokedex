import React, { useEffect, useState } from 'react';
import { customSeach } from '../api/api';
import Loading from './Loading';

const TypeWeakness = ({pokemon}) => {

    const [types, setTypes] = useState([]);
    const [weaknesses, setWeaknesses] = useState([]);
    const [loading, isLoading] = useState(true);
    
    const fetchTypesNWeakness = async () => {
        try {
            const typesUrl = pokemon.types.map((type) => type.type.url);
            const promises = typesUrl.map(async (url) => await customSeach(url));
            const results = await Promise.all(promises);
            setTypes(results);

            const weakness = results.map((type) => {
                return type.damage_relations.double_damage_from;
            });

            let weaknessName = weakness.map((array) => {
                return array.map((type) => type.name);
            });

            if (weaknessName.length > 1) {
                weaknessName = weaknessName[0].concat(weaknessName[1]);
            }

            setWeaknesses(weaknessName);

            isLoading(false);
            console.log(results);
            console.log(weaknessName);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchTypesNWeakness();
    }, []);

    return (
        <div>
            {
                loading ? <Loading /> :
                <div className='typeWeakness'>
                    <div>
                        <p className='typeWeakness__title'>Type</p>
                        <ul className='types'>
                            {
                                types.map((type, idx) => {
                                    return (
                                        <li className={`${type.name} type`} key={idx}>
                                            {type.name}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div>
                        <p className='typeWeakness__title'>Weakness</p>
                        <ul className='types'>
                            {
                                weaknesses.map((weakness, idx) => {
                                    return (
                                        <li className={`${weakness} type`} key={idx}>
                                            {weakness}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            }
        </div>
    )
}

export default TypeWeakness;