import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import cookINlogo from './images/cookINlogo.png';
import './AboutPageUS.css';
import './App.css';

function Re() {
  const search = window.location.search;
  const query = new URLSearchParams(search);
  const recipeId = query.get('recipetypeid');

  const placeholderImageUrl = "https://via.placeholder.com/150";

  const [savedRecipes, setSavedRecipes] = useState([]);

  useEffect(() => {
    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/recipes/RecipeType/'+recipeId);
        setSavedRecipes(response.data);
      } catch (error) {
        console.error('Error fetching saved recipes:', error);
      }
    };

    fetchSavedRecipes();
  }, []);

  return (
    <div>
      <Navbar bg="body-tertiary" expand="lg" className='navbarContainer'>
        <Navbar.Brand>
          <img src={cookINlogo} width={100} height={100} className="image" alt=''/>
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
          <Link to="/signup" className="btn btn-sign up"><strong>Sign Up</strong></Link>
          <Link to="/login" className="btn btn-log in"><strong>Login</strong></Link>
        </Navbar.Collapse>
      </Navbar>
      <div className='savedRecipes' id='root'>
        <h1 className='homepagetitle'>Recent Recipes</h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {savedRecipes.map(recipe => (
            <div key={recipe.recipeid} className="col mb-4">
              <div className="card border-secondary mb-3" style={{ maxWidth: '27rem' }}>
                <div className="card-header">{recipe.title}</div>
                <img
                  src={recipe.urlimage ? recipe.urlimage : placeholderImageUrl}
                  className='card-img-top img-fluid'
                  alt={recipe.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body text-secondary">
                  <p className="card-text">{recipe.summary}</p>
                  <Link to={"/Recipe?recipeid=" + recipe.recipeid} className="btn btn-secondary">
                    View Recipe
                  </Link>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
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
  );
}

export default Re;