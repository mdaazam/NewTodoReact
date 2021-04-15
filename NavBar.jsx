import React from 'react';
import { Link } from 'react-router-dom'

const NavBar=() => {
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"  aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                              <Link to="/home" className="nav-link active">Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/todos" className="nav-link ">Todos</Link>
                            </li>
                            {/*<li className="nav-item">
                            <Link to="/info" className="nav-link ">Data Info</Link>
                            </li>*/}
                            <li className="nav-item">
                            <Link to="/todo" className="nav-link ">Create Todo Link</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default NavBar;