import React from 'react';
import { Link } from '@reach/router';
import axios from 'axios';


const Display = props => {
    const deletePirate = _id => {
        axios.delete(`http://localhost:8000/api/pirate/delete/${_id}`)
            .then(() => props.update())
            .catch(err => console.log(err))
    }
    const {pirate} = props;
    return(
        <>
            <div>
            <table class="table table-dark">
                <tbody>
                    <tr>
                        <td><img src={pirate.picture} alt={pirate.picture}/></td>
                        <td><h1>{pirate.name}</h1></td>
                        <td><Link to = {`/pirate/${pirate._id}`}><button className = "btn btn-primary">View Pirate</button></Link>&nbsp;
                        <button className = "btn btn-danger" onClick={() => deletePirate(props.pirate._id)}>Walk the Plank</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    );
}

export default Display;