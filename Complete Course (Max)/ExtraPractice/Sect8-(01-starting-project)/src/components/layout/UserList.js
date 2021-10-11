import React, { useState } from 'react'

import Card from '../ui/Card';

function UserList(props) {
    return (
        <Card>
            <h4> User List: </h4>
            <ul>
                {props.users.map((user) => (
                <li key={user.name}>
                    {user.name} ({user.age} years old)
                </li>
                ))}
            </ul>
        </Card>
    )
}

export default UserList
