import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import cookINlogo from './images/cookINlogo.png';
import './App.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '600px',
    backgroundColor: '#fff',
  };

  const formContainerStyle = {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '20px',
    width: '60%',
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/users/login', 
      { email, password },
      { withCredentials: true });
      if (response.status === 200) {
        localStorage.setItem('couser', JSON.stringify(email));
        navigate('/profile');
      } else
      { 
        if (localStorage.getItem('couser')) {
          localStorage.removeItem('couser');
        }
       }

    } catch (error) {
      if (localStorage.getItem('couser')) {
        localStorage.removeItem('couser');
      }

      setError('Invalid email or password');
    }
  };

  return (
    <div>
      <Navbar bg="body-tertiary" expand="lg" className='navbarContainer'>
        <Navbar.Brand>
          <img src={cookINlogo} width={100} height={100} className="image" alt='' />
        </Navbar.Brand>
        <Navbar.Brand>cookIN'</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto">
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
            <NavDropdown title="Recipes" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Re?recipetypeid=1">Recipes for Breakfast</NavDropdown.Item>
              <NavDropdown.Item href="/Re?recipetypeid=2">Soup Recipes</NavDropdown.Item>
              <NavDropdown.Item href="/Re?recipetypeid=3">Salad Recipes</NavDropdown.Item>
              <NavDropdown.Item href="/Re?recipetypeid=4">Pasta Recipes</NavDropdown.Item>
              <NavDropdown.Item href="/Re?recipetypeid=5">Rice Recipes</NavDropdown.Item>
              <NavDropdown.Item href="/Re?recipetypeid=6">Meat Recipes</NavDropdown.Item>
              <NavDropdown.Item href="/Re?recipetypeid=7">Chicken Recipes</NavDropdown.Item>
              <NavDropdown.Item href="/Re?recipetypeid=8">Vegetable Recipes</NavDropdown.Item>
              <NavDropdown.Item href="/Re?recipetypeid=9">Fish Recipes</NavDropdown.Item>
              <NavDropdown.Item href="/Re?recipetypeid=10">Dessert Recipes</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Recipes for Events" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Ev?eventtypeid=1">Recipes for a Party</NavDropdown.Item>
              <NavDropdown.Item href="/Ev?eventtypeid=1">Recipes for a Game Night</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Link to="/aboutus" className="btn btn-sign up"><strong>About Us!</strong></Link>
        </Navbar.Collapse>
      </Navbar>
      <div style={containerStyle} id='root'>
        <div style={formContainerStyle}>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label"><strong>Email</strong></label>
              <input
                type="email"
                placeholder='Enter your e-mail'
                className="form-control rounded-0"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label"><strong>Password</strong></label>
              <input
                type="password"
                placeholder='Enter your password'
                className="form-control rounded-0"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-danger">{error}</p>}
            <button type="submit" className="btn btn-secondary w-100"><strong>Login</strong></button>
            <p>Don't have an account?</p>
            <Link to="/signup" className="btn btn-secondary border w-100"><strong>Sign Up</strong></Link>
          </form>
        </div>
      </div>
      <div>
        <div className="footer">
          <div className="footer-section">
            <p className="footerTitle">cookIN'</p>
            <p style={{ textAlign: 'center' }}>cookIN' for yourself and your loved ones tasty dishes using the recipes on our website. cookIN' is your go-to destination for mouthwatering recipes and culinary inspiration.</p>
          </div>
          <div className="footer-section">
            <p className="footerTitle">Who Are We?</p>
            <p style={{ textAlign: 'center' }}>Aleyna İslamoğlu</p>
            <p style={{ textAlign: 'center' }}>Irmak Kara</p>
            <p style={{ textAlign: 'center' }}>Dilruba Kaya</p>
            <p style={{ textAlign: 'center' }}>Irmak Koç</p>
          </div>
          <div className="footer-section">
            <p className="footerTitle">Contact Us</p>
            <p style={{ textAlign: 'center' }}>cookin@mail.com</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
