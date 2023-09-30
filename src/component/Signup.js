import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [phone, setPhone] = useState('');
  const [profession, setProfession] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        setNameError('');
        break;
      case 'email':
        setEmail(value);
        setEmailError('');
        break;
      case 'password':
        setPassword(value);
        setPasswordError('');
        break;
      case 'phone':
        setPhone(value);
        setPhoneError('');
        break;
      case 'profession':
        setProfession(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    let isValid = true;
    if (!name) {
      setNameError('Name is required');
      isValid = false;
    }
    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    }
    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    }
    if (!phone) {
      setPhoneError('Phone number is required');
      isValid = false;
    }
    if (!profession) {
      setProfession('Profession is required'); 
      isValid = false;
    }

    if (isValid) {
      // Store the data in local storage
      const userData = {
        name,
        email,
        password,
        phone,
        profession,
      };
      localStorage.setItem('userData', JSON.stringify(userData));

      console.log('User Data:', userData);

      // Clear form inputs
      setName('');
      setEmail('');
      setPassword('');
      setPhone('');
      setProfession('');

      // Navigate to the desired route
      navigate('/Login'); 
    }
  };

  return (
    <div className="container"style={{ overflow: 'hidden' }}>
      <div className="row">
        <div className="col-md-6 offset-md-3 col-sm-12" style={{ paddingTop: '80px' }}>
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center">Signup</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                    placeholder="Name"
                  />
                  {nameError && <div className="error-message">{nameError}</div>}
                </div>
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
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    value={phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                  />
                  {phoneError && <div className="error-message">{phoneError}</div>}
                </div>
                <div className="form-group">
                  <label htmlFor="profession">Profession</label>
                  <select
                    className="form-control"
                    name="profession"
                    value={profession}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Profession</option>
                    <option value="Student">Student</option>
                    <option value="Professional">Professional</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="btn btn-dark d-block mx-auto"
                  style={{ marginTop: '17px' }}
                >
                  Signup
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
