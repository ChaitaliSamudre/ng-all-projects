import React, { useState } from 'react'
import UserTable from '../pages/UserTable';

export default function HomePage(props) {


    // return (
    //     <>
    //         <p>I am in home page</p>
    //     </>
    // );

const HomePage = () => {
    const usersData = [
        { id: 1, name: 'Tania', username: 'floppydiskette' },
        { id: 2, name: 'Craig', username: 'siliconeidolon' },
        { id: 3, name: 'Ben', username: 'benisphere' }
    ]
    const [users, setUsers] = useState(usersData)
    return (
    <div className="container">
        <h1>CRUD App with Hooks</h1>
        <div className="flex-row">
            <div className="flex-large">
                <h2>Add user</h2>
                </div>
                <div className="flex-large">
                    <h2>View users</h2>
                    <UserTable users={users} />
                    </div>
                    </div>
                    </div>
                    );
                }          
}