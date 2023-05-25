import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Home.css'
import axios from 'axios'; 

const Home = () => {

    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers()
    }, [])

    const loadUsers = async () => {
        const result = await axios.get('http://localhost:8080/api/users')
        setUser(result.data)
    }

  return (
    <div className='container'>
        <div className='py-4'>
            <table className='table border shadow'>
                <thead>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>UserName</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    users.map((user, index) => (
                        <tr>
                            <th scope='row'>{index+1}</th>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>
                                <button className='btn btn-primary mx-2'>View</button>
                                <Link className='btn btn-outline-primary mx-2' exact to={`/edituser/${user.id}`}>Edit</Link>
                                <button className='btn btn-danger mx-2'>Delete</button>
                            </td>
                        </tr>
                    ))
                }
                    
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Home