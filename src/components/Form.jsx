import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';


const Form = props => {
    const [myForm, setMyForm] = useState({
        name: "",
        picture: "",
        treasurechests: 0,
        catchphrase: "",
        position: "Captain",
        pegleg: true,
        eyepatch: true,
        hookhand: true
    });
    const [error, setError] = useState({});
    const onChangeHandler = e => {
        setMyForm({...myForm, [e.target.name]: e.target.value})
    }
    const checkedHandler = e => {
        setMyForm({...myForm, [e.target.name]: e.target.checked})
    }
    const SubmitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/pirate/create", myForm)
            .then(res => {
                if(res.data.error){
                    setError(res.data.error.errors)
                } else{
                    navigate("/")
                }
            })
            .catch(err => console.log(err))
    }
    return(
        <>
            <form onSubmit = {SubmitHandler} className = "container">
                <div className = "form-group">
                    <label>Name</label>
                    <input type="text" name = "name" className ="form-control" value = {myForm.name} onChange = {onChangeHandler}/>
                    {
                        error.name ? <span className = "text-danger">{error.name.message}</span> : ""
                    }
                </div>
                <div className = "form-group">
                    <label>Picture</label>
                    <input type="text" name = "picture" className ="form-control" value = {myForm.picture} onChange = {onChangeHandler}/>
                    {
                        error.picture ? <span className = "text-danger">{error.picture.message}</span> : ""
                    }
                </div>
                <div className = "form-group">
                    <label># of Treasure Chests</label>
                    <input type="number" name = "treasurechests" className ="form-control" value = {myForm.treasurechests} onChange = {onChangeHandler}/>
                    {
                        error.treasurechests ? <span className = "text-danger">{error.treasurechests.message}</span> : ""
                    }
                </div>
                <div className = "form-group">
                    <label>Catch Phrase</label>
                    <input type="text" name = "catchphrase" className ="form-control" value = {myForm.catchphrase} onChange = {onChangeHandler}/>
                    {
                        error.catchphrase ? <span className = "text-danger">{error.catchphrase.message}</span> : ""
                    }
                </div>
                <div className = "form-group">
                    <label>Crew Position</label>
                    <select name = "position" className ="form-control" value = {myForm.position} onChange = {onChangeHandler}>
                        <option value = "Captain">Captain</option>
                        <option value = "FirstMate">First Mate</option>
                        <option value = "Cook">Cook</option>
                        <option value = "PowderMonkey">Powder Monkey</option>
                    </select>
                </div>
                <div className = "form-group">
                    <input type="checkbox" name = "pegleg" checked = {myForm.pegleg} onChange = {checkedHandler}/>
                    <label>Peg Leg</label>
                </div>
                <div className = "form-group">
                    <input type="checkbox" name = "eyepatch" checked = {myForm.eyepatch} onChange = {checkedHandler}/>
                    <label>Eye Patch</label>
                </div>
                <div className = "form-group">
                    <input type="checkbox" name = "hookhand" checked = {myForm.hookhand} onChange = {checkedHandler}/>
                    <label>Hook Hand</label>
                </div>
                <br />
                <input type="submit" value = "Submit" className = "btn btn-primary"/>
            </form>
        </>
    );
}

export default Form;