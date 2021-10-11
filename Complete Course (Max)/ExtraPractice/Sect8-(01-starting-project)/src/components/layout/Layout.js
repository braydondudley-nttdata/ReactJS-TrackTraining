import React, { useState} from 'react'
import UserForm from './UserForm'
import UserList from './UserList'

function Layout() {
    const [ addedUsers, setAddedUsers ] = useState([]);

    const addUsersHandler = (uName, uAge) => {
        setAddedUsers(prevUsers => {
            return [...prevUsers, { id: Math.random.toString(), name: uName, age: uAge}]
        });
        console.log(addedUsers);
    }

    return (
        <div>
            <UserForm onAddUser={addUsersHandler}/>
            <br/><br/>
            <UserList users={addedUsers}/>
        </div>
    )
}

export default Layout
