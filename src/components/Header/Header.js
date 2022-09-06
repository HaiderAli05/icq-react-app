// importing required packages and components
import React from 'react';
import { Link } from 'react-router-dom';
// import Logo from './assets/icq-logo.png';
import './Header.css';



// define Header and use required components in it
const Header = () => {

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
        <div className="container">
          <Link className="navbar-brand" to="/"><h1 className='fs-1 fw-normal'>ICQ Logo</h1></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">SignUp</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/login'>LogIn</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
};



// exporting Header component as default
export default Header