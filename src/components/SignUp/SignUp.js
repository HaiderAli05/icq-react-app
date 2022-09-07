// importing required packages and components
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { isEmpty, isEmail, equals } from 'validator';
import { showErrorMessage, showSuccessMessage } from '../../helpers/message.js';
import { showLoading } from '../../helpers/loading.js';
import { register } from '../../api/user.js';
import {
  getTokenInStorage,
  getUserRole
} from '../../helpers/localStorage.js';


// define SignUp and use required components in it
const SignUp = () => {

  let navigate = useNavigate();

  useEffect(() => {
    // Check if user is Admin or a customer for specific Dashboards
    if (getTokenInStorage() && (getUserRole() === 'ADMIN')) {
      navigate('/dashboard');
    } else if (getTokenInStorage() && getUserRole() === 'RECRUITER') {
      navigate('/dashboard');
    } else if (getTokenInStorage() && getUserRole() === 'WORKER') {
      navigate('/dashboard');
    }
  }, [navigate]);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    address: '',
    role: '',
    successMsg: false,
    errorMsg: false,
    loading: false
  });

  const { firstName, lastName, email, role, password, confirmPassword, phone, address, successMsg, errorMsg, loading } = formData;

  // Event Handlers
  const handleChange = (evt) => {

    setFormData({
      ...formData,
      [evt.target.name]: (evt.target.type === 'radio') ? evt.target.id : evt.target.value,
      errorMsg: '',
      successMsg: ''
    });

  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // Client Side Validation
    if (isEmpty(firstName) || isEmpty(email) || isEmpty(role) || isEmpty(password) || isEmpty(confirmPassword) || isEmpty(phone) || isEmpty(address)) {
      setFormData({
        ...formData,
        errorMsg: 'All fields are required'
      })
    } else if (!isEmail(email)) {
      setFormData({
        ...formData,
        errorMsg: 'Invalid Email'
      })
    } else if (!equals(password, confirmPassword)) {
      setFormData({
        ...formData,
        errorMsg: 'Passwords must be same!'
      })
    } else {

      const { firstName, lastName, email, password, phone, address, role } = formData;

      const newUserData = { firstName, lastName, email, password, phone, address, role };

      setFormData({ ...formData, loading: true });

      register(newUserData)
        .then((response) => {
          console.log('User Registered Success', response);
          setFormData({
            ...formData,
            loading: false,
            successMsg: response.data.message,
          });
          navigate('/login');
        })
        .catch((err) => {
          console.log('User Register error', err);
          setFormData({
            ...formData,
            loading: false,
            errorMsg: err.message
          });
        });
    }

  };

  return (
    <section className="container py-custom">
      <div className="bg-secondary rounded shadow text-white col-lg-8 col-md-10 p-5 m-auto">
        <form className="row g-3 lead register-form" method="post" action="/api/user/register" onSubmit={handleSubmit}>
          <h2 className="register-title text-center display-6">Create an Account</h2>
          <div className="col-md-6">
            <label for="firstName" className="form-label">First Name</label>
            <input type="text" className="form-control bg-light text-secondary" id="firstName" name="firstName" value={firstName} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label for="lastName" className="form-label">Last Name</label>
            <input type="text" className="form-control bg-light text-secondary" id="lastName" name="lastName" value={lastName} onChange={handleChange} />
          </div>
          <div className="col-md-12">
            <label for="email" className="form-label">Email</label>
            <input type="email" className="form-control bg-light text-secondary" id="email" name="email" value={email} onChange={handleChange} required />
          </div>
          <div className="row col-md-12 mt-3">
            <label className="form-label">Role</label>
            <div className="col-md-6 form-check ps-5">
              <input class="form-check-input" type="radio" name="role" id="recruiter" onClick={handleChange} />
              <label class="form-check-label" for="recruiter">
                Recruiter
              </label>
            </div>
            <div className="col-md-6 form-check ps-5">
              <input class="form-check-input" type="radio" name="role" id="worker" onClick={handleChange} />
              <label class="form-check-label" for="worker">
                Worker
              </label>
            </div>
          </div>
          <div className="col-md-6">
            <label for="password" className="form-label">Password</label>
            <input type="password" className="form-control bg-light text-secondary" id="password" name="password" value={password} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label for="confirmPassword" className="form-label">Confirm Password</label>
            <input type="password" className="form-control bg-light text-secondary" id="confirmPassword" name="confirmPassword" value={confirmPassword} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label for="phone" className="form-label">Phone</label>
            <input type="number" className="form-control bg-light text-secondary" id="phone" name="phone" value={phone} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label for="address" className="form-label">Address</label>
            <input type="text" className="form-control bg-light text-secondary" id="address" name="address" value={address} onChange={handleChange} required />
          </div>
          <div className="col-md-12">
            <button type="submit" className="btn btn-lg btn-outline-light w-100 mt-3">Register</button>
          </div>
          {errorMsg && showErrorMessage(errorMsg)}
          {successMsg && showSuccessMessage(successMsg)}
          <div className="text-center">{loading && showLoading(loading)}</div>
          <div className="col-md-12">
            <p className="lead">Already have an account? <Link to="/login" className="text-white-50">LogIn</Link></p>
          </div>
        </form>
      </div>
    </section>
  )
}



// exporting SignUp component as default
export default SignUp