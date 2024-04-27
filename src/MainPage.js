import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import cookINlogo from './images/cookINlogo.png';
import sademakarna from './images/sademakarna.png';
import avakado from './images/avakadotost.png';
import lokma from './images/lokma.png';
import './AboutPageUS.css';
import './App.css';

function MainPage() {
  const placeholderImageUrl = "https://via.placeholder.com/150";

  const [savedRecipes, setSavedRecipes] = useState([
    { id: 1, title: "Makarna", summary: "Sade makarna.", imageUrl: sademakarna},
    { id: 2, title: "Avakado Tost", summary: "Avakado, yumurta ve ekmeğin muhteşem birleşimi.", imageUrl: avakado},
    { id: 3, title: "Lokma Tatlısı", summary: "Lokma.", imageUrl: lokma },
    { id: 4, title: "Recipe 4", summary: "Summary for Recipe 4", imageUrl: placeholderImageUrl }
  ]);

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
          <Link to="/signup" className="btn btn-sign up"><strong>Sign Up</strong></Link>
          <Link to="/login" className="btn btn-log in"><strong>Login</strong></Link>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btnSearch" type="submit">Search</button>
          </form>
        </Navbar.Collapse>
    </Navbar>
    <div className='savedRecipes' id='root'>
    <h2 className='homepagetitle'>Recent Recipes</h2>
      {savedRecipes.map(recipe => (
        <div key={recipe.id} className="recipeItem">
          <img src={recipe.imageUrl} className='homepageimages'/>
          <div>
            <Link to={`/Recipe${recipe.id}`}>
              <strong>{recipe.title}</strong>
            </Link>
            </div>
        <p>{recipe.summary}</p>
        <br></br>
        <br></br>
      </div>
      ))}
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

export default MainPage;
