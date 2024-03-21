import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './loginpage.css'

function


 LoginPage() {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));

    setIsButtonDisabled(value === '' || formValues.password === '');
  };


  const handleLogin = () => {

    console.log('Email:', formValues.email);
    console.log('Password:', formValues.password);
  };

  return (
    <div>
      <div className="maincontainer">
        <div className="screen">
          <div className="screen-content">
            <img src='./images/zenius1.png' className='logo' alt="Logo" />
          </div>
          <div className="sub-screen">
            <div className="containt">
              <div className="login-Details">
                <label className="form-label login-lables">User Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  name="email"
                  value={formValues.email}
                  onChange={handleInputChange}
                />
                <div className="mt-2">
                  <label className="form-label login-lables">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="pwd"
                    placeholder="Enter password"
                    name="password"
                    value={formValues.password}
                    onChange={handleInputChange}
                  />
                </div>
                <Link to='/search'>
                  <button
                    type="button"
                    className={`btn btn-login ${isButtonDisabled && 'btn-login-disabled'}`}
                    onClick={handleLogin}
                  >
                    Log In
                  </button>
                </Link>
              </div>
              <div className="signup-login-userprofile">
            Already have an account?<span className="sign-user-profile-text">Login</span>
          </div>
            </div>
         
          </div>

     
        </div>
      </div>
    </div>
  );
}
export default LoginPage;