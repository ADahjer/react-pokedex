import React, { useEffect, useRef, useState } from 'react';
import { Overlay, Tooltip } from 'react-bootstrap';
import { customSeach } from '../api/api';
import Loading from './Loading';

const TypeWeakness = ({pokemon}) => {

    const [types, setTypes] = useState([]);
    const [weaknesses, setWeaknesses] = useState([]);
    const [doubleWeak, setDoubleWeak] = useState([]);
    const [loading, isLoading] = useState(true);
    
    const target = useRef(null);
    const [show, setShow] = useState(false);

    const fetchTypesNWeakness = async () => {
        try {
            const typesUrl = pokemon.types.map((type) => type.type.url);
            const promises = typesUrl.map(async (url) => await customSeach(url));
            const results = await Promise.all(promises);
            setTypes(results);

            // getting weaknes x2 and x4
            // if the first type has weakness, but the second gets only half the damage, the weakness is removed.
            // if a type has an inmunity, that weakness also is removed.
            // if both types has weakness over the same type, it will be x4 weakness.
            const weakness = results.map(type => {
                return type.damage_relations.double_damage_from;
            });

            const halfDamage = results.map(type => {
                return type.damage_relations.half_damage_from;
            });

            const noDamage = results.map(type => {
                return type.damage_relations.no_damage_from;
            })

            let weaknessName = weakness.map(array => {
                return array.map(type => type.name);
            });

            let halfDamageName = halfDamage.map(array => {
                return array.map(type => type.name);
            });

            let noDamageName;

            if (noDamage) {
                noDamageName = noDamage.map(array => {
                    return array.map(type => type.name);
                });
            }

            if (weaknessName.length > 1) {
                weaknessName = weaknessName[0].concat(weaknessName[1]);
            }

            if (halfDamageName.length > 1) {
                halfDamageName = halfDamageName[0].concat(halfDamageName[1]);
            }

            if (noDamageName.length > 1) {
                noDamageName = noDamageName[0].concat(noDamageName[1]);
            }

            let weaknessTable = [];
            weaknessName.map(type => {
                if (!halfDamageName.includes(type) && !noDamageName.includes(type)){
                    weaknessTable.push(type);
                }
                return 0;
            })

            // find duplicates weakness to set the x4 weakness
            const Duplicates = weaknessTable.filter((type, idx) => {
                return weaknessTable.indexOf(type) !== idx;
            });

            setDoubleWeak(Duplicates);

            weaknessTable = [...new Set(weaknessTable)];

            setWeaknesses(weaknessTable);
            isLoading(false);
            
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
                                    if (doubleWeak.includes(weakness)) {
                                        return (
                                            <li className={`${weakness} doubleWeak type`} key={idx} onClick={() => setShow(!show)} ref={target}>
                                                {weakness}
                                            </li>
                                        )
                                    }
                                    return (
                                        <li className={`${weakness} type`} key={idx}>
                                            {weakness}
                                        </li>
                                    )
                                })
                            }
                            
                            <Overlay target={target.current} show={show} placement='bottom'>
                                {(props) => (
                                    <Tooltip id='tooltip' {...props}>
                                        Gets x4 damage
                                    </Tooltip>
                                )}
                            </Overlay>

                        </ul>
                    </div>
                </div>
            }
        </div>
    )
}

export default TypeWeakness;