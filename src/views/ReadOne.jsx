import React, { useEffect, useState } from 'react';
import axios from 'axios';


const ReadOne = props => {
    const [onePirate, setOnePirate] = useState(null);
    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirate/${props._id}`)
            .then(res => setOnePirate(res.data))
            .catch(err => console.log(err))
    }, [props])
    return(
        <>
        {
            onePirate ? <>
            <h1>{onePirate.name}</h1>
            <div className = "row">
                <div className = "col -4">
                    <img src = {onePirate.picture} alt = {onePirate.name}/>
                    <h3>"{onePirate.catchphrase}"</h3>
                </div>
                <div className = "col -8">
                    <h2>About</h2>
                    <h3>Position: {onePirate.position}</h3>
                    <h3>Treasure Chests: {onePirate.treasurechests}</h3>
                    <h3>Peg Leg: {onePirate.pegleg ? "Yes" : "No"}</h3>
                    <h3>Eye Patch: {onePirate.eyepatch ? "Yes" : "No"}</h3>
                    <h3>Hook Hand: {onePirate.hookhand ? "Yes" : "No"}</h3>
                </div>
            </div>
            </> : ""
        }
        </>
    );
}

export default ReadOne;