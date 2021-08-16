import React, { useEffect, useState } from 'react';
import Display from '../components/Display';
import axios from 'axios';

const Home = props => {
    const [allPirates, setAllPirates] = useState(null);
    const [reloadAPI, setRelaodAPI] = useState(true);
    useEffect(() => {
        axios.get("http://localhost:8000/api/pirate")
            .then(res => setAllPirates(res.data))
            .catch(err => console.log("Error",err))
    },[reloadAPI])
    const update = () => {
        setRelaodAPI(!reloadAPI);
    }
    return(
        <>
            <h1>Pirate Crew</h1>
            {
                allPirates ? allPirates.map((item , i) => <Display key = {i} pirate = {item} update = {update}/>) : ""
            }
        </>
    );
}

export default Home;