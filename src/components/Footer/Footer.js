// importing required packages and components
import React from 'react';
import { Link } from 'react-router-dom';



// define Footer and use required components in it
const Footer = () => {

  return (
    <footer className="bg-secondary text-light text-center text-lg-start">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase display-6 text-white">ICQ Logo</h5>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
              molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam
              voluptatem veniam, est atque cumque eum delectus sint!
            </p>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase text-white">Menu</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <Link to="/" className="text-light text-decoration-none d-inline-block my-1">Home</Link>
              </li>
              <li>
                <Link to="/login" className="text-light text-decoration-none d-inline-block my-1">LogIn</Link>
              </li>
              <li>
                <Link to="/signup" className="text-light text-decoration-none d-inline-block my-1">SignUp</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase text-white">Contacts</h5>

            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-light text-decoration-none d-inline-block my-1">+00 000 000</Link>
              </li>
              <li>
                <Link to='/' className="text-light text-decoration-none d-inline-block my-1">abc@xyz.com</Link>
              </li>
              <li>
                <Link to="/" className="text-light text-decoration-none d-inline-block my-1">Address of ICQ.</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center p-3 lead bg-dark">
        <p className="p-0 m-0">© Copyright 2022 ICQ</p>
      </div>
    </footer>
  )
}



// exporting Footer component as default
export default Footer