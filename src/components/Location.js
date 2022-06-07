import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import image3 from './image 3.png'
import ResidentInfo from './ResidentInfo';

const Location = () => {

    const [location, setLocation] = useState({})
    const [id, setId] = useState("")
    

    useEffect(() => {
        const random = Math.floor(Math.random() * 126) + 1
        axios.get(`https://rickandmortyapi.com/api/location/${random}`)
            .then(res => setLocation(res.data))
    },[]);

    const searchLoc = () => {
        if (id <= 126) {
            axios.get(`https://rickandmortyapi.com/api/location/${id}`)
                .then(res => setLocation(res.data))
        } else {
            alert("escribe un numero entre 1 y 126")
        }

    }

    return (
        <div className='App'>
            <img src={image3} alt="" />
            <div>
                <input type="text" onChange={e => setId(e.target.value)} value={id} />
                <button onClick={searchLoc}>Buscar</button>
            </div>
            <nav className="nav">
                <h4><p>Nombre:</p> {location.name}</h4>
                <h4><p>Tipo:</p> {location.type}</h4>
                <h4><p>Dimension:</p> {location.dimension}</h4>
                <h4><p>Poblacion:</p> {location.residents?.length}</h4>
            </nav>
            <div className='Cards'>
                {location.residents?.map(residents => (
                    <ResidentInfo url={residents} key={residents} />
                ))}
            </div>
        </div>
    );
};

export default Location;