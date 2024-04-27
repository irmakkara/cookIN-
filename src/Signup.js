import React from "react";
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import cookINlogo from './images/cookINlogo.png';
import './App.css';

function Signup() {
    const containerStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '600px',
      backgroundColor: '#fff',
    };
  
    const formContainerStyle = {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '10px',
      width: '50%',
    };
  
    return (
      <div>
    <Navbar bg="body-tertiary" expand="lg" className='navbarContainer'>
      <Navbar.Brand>
        <img src={cookINlogo} width={100} height={100} className="image"/>
      </Navbar.Brand>
        <Navbar.Brand>cookIN'</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto">
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
            <NavDropdown title="Recipes" id="basic-nav-dropdown">
              <NavDropdown.Item href="/ReBr">Recipes for Breakfast</NavDropdown.Item>
              <NavDropdown.Item href="/ReSoup">Soup Recipes</NavDropdown.Item>
              <NavDropdown.Item href="/ReSalad">Salad Recipes</NavDropdown.Item>
              <NavDropdown.Item href="/RePasta">Pasta Recipes</NavDropdown.Item>
              <NavDropdown.Item href="/ReRice">Rice Recipes</NavDropdown.Item>
              <NavDropdown.Item href="/ReMeat">Meat Recipes</NavDropdown.Item>
              <NavDropdown.Item href="/ReCh">Chicken Recipes</NavDropdown.Item>
              <NavDropdown.Item href="ReVeg">Vegetable Recipes</NavDropdown.Item>
              <NavDropdown.Item href="ReFish">Fish Recipes</NavDropdown.Item>
              <NavDropdown.Item href="ReDess">Dessert Recipes</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Recipes for Events" id="basic-nav-dropdown">
              <NavDropdown.Item href="/ReParty">Recipes for a Party</NavDropdown.Item>
              <NavDropdown.Item href="/ReGN">Recipes for a Game Night</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Link to="/aboutus" className="btn btn-sign up"><strong>About Us!</strong></Link>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btnSearch" type="submit">Search</button>
          </form>
        </Navbar.Collapse>
    </Navbar>
      <div style={containerStyle} id="root">
        <div style={formContainerStyle}>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label"><strong>Name</strong></label>
              <input type="name" placeholder='Enter your name' className="form-control rounded-0" />
            </div>
            <div className="mb-3">
              <label htmlFor="Surname" className="form-label"><strong>Surname</strong></label>
              <input type="Surname" placeholder='Enter your surname' className="form-control rounded-0" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label"><strong>Email</strong></label>
              <input type="email" placeholder='Enter your e-mail' className="form-control rounded-0" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label"><strong>Password</strong></label>
              <input type="password" placeholder='Enter your password' className="form-control rounded-0" />
            </div>
            <button type="submit" className="btn btn-secondary w-100"><strong>Sign Up!</strong></button>
            <p>Already have an account?</p>
            <Link to="/login" className="btn btn-secondary w-100"><strong>Login</strong></Link>
          </form>
        </div>
      </div>
      <div>
      <div className="footer">
        <div className="footer-section">
          <p className="footerTitle">cookIN'</p>
          <p style={{textAlign:'center'}}>cookIN' for yourself and your loved ones tasty dishes using the recipes on our website. cookIN' is your go-to destination for mouthwatering recipes and culinary inspiration.</p>
        </div>
        <div className="footer-section">
          <p className="footerTitle">Who Are We?</p>
          <p style={{textAlign:'center'}}>Aleyna İslamoğlu</p>
          <p style={{textAlign:'center'}}>Irmak Kara</p>
          <p style={{textAlign:'center'}}>Dilruba Kaya</p>
          <p style={{textAlign:'center'}}>Irmak Koç</p>
        </div>
        <div className="footer-section">
          <p className="footerTitle">Contact Us</p>
          <p style={{textAlign:'center'}}>cookin@mail.com</p>
        </div>
      </div>
    </div>
    </div>
    );
  }
  
export default Signup