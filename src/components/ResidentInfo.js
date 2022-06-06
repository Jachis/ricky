import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ResidentInfo = ({url}) => {
    const [character, setCharacter] = useState({})

    useEffect(() => {
        axios.get(url)
        .then(res => setCharacter(res.data) )
    }, []);

    return (
        <div className='Card'>
            <span><i className={`fa-solid fa-circle ${character.status}`}></i> {character.status}</span>
            <img src={character.image} alt="" />
                <div className='info'>
                    <h3>{character.name}</h3>
                    <h6><p>RAZA:</p> {character.species}</h6>
                    <h6><p>ORIGEN:</p> {character.origin?.name}</h6>
                    <h6><p>APARICIÓN EN EPISODIOS:</p> {character.episode?.length}</h6>  
                </div>      
        </div>
    );
};

export default ResidentInfo;