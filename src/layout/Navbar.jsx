import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <a className="navbar-brand" href="#Home">StylesDev</a>
                <button className="navbar-toggler" type='button' data-toggle="collapse" data-target="#navbarSupportedContent" aria-expanded="false" aria-controls="navbarSupportedContent" aria-label='Toggle navigation' >
                    <span className='navbar-toggler-icon'></span>
                </button>

                <div className="collapse nav-collapse" id="navbarSuppotedContent">
                    <ul className="navbar-nav mr-auto">

                    </ul>
                </div>
                <Link className='btn btn-outline-light' to='/adduser'>Add User</Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar