import React, { useState } from 'react'

import classes from "./UserForm.module.css"
import Card from "../ui/Card"

const UserForm = props => {
    const [ selectedName, setSelectedName ] = useState('');
    const [ selectedAge, setSelectedAge ] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        // setSelectedName(
        props.onAddUser(selectedName, selectedAge);
    }

    const nameChangeHandler = event => {
        setSelectedName(event.target.value);
    }

    const ageChangeHandler = event => {
        setSelectedAge(event.target.value);
    }

    return (
        <Card className={classes.input}> 
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>Username</label>
                <input 
                    type='text' 
                    id='username' 
                    value={selectedName} 
                    onChange={nameChangeHandler}></input>
                <br/>
                <label htmlFor='age'>Age</label>
                <input 
                    type='text' 
                    id='age' 
                    value={selectedAge} 
                    onChange={ageChangeHandler}></input>
                <br/>
                <br/>
                <button>Submit</button>
            </form>
        </Card>
    )
};

export default UserForm;
