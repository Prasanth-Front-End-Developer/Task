import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginError, setLoginError] = useState(''); // Added loginError state

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        setEmailError('');
        break;
      case 'password':
        setPassword(value);
        setPasswordError('');
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (!email) {
      setEmailError('Email is required');
    }
    if (!password) {
      setPasswordError('Password is required');
    }

    // Check if the email and password match the stored user data
    const storedUserData = JSON.parse(localStorage.getItem('userData'));
    if (storedUserData && email === storedUserData.email && password === storedUserData.password) {
      // Clear form inputs
      setEmail('');
      setPassword('');

      navigate('/home');
    } else {
      // Display "Invalid Credentials" message
      setLoginError('Invalid Credentials');
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 col-sm-12" style={{ paddingTop: '195px' }}>
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center">Login</h3>
              <form onSubmit={handleSubmit}>
                {loginError && <div className="error-message">{loginError}</div>} 
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    placeholder="Email"
                  />
                  {emailError && <div className="error-message">{emailError}</div>}
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                    placeholder="Password"
                  />
                  {passwordError && <div className="error-message">{passwordError}</div>}
                </div>
                <button
                  type="submit"
                  className="btn btn-dark d-block mx-auto"
                  style={{ marginTop: '17px' }}
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
