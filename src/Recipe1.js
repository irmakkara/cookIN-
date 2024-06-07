import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import cookINlogo from './images/cookINlogo.png';
import './App.css';

function Recipe1() {
  const search = window.location.search;
  const query = new URLSearchParams(search);
  const recipeId = query.get('recipeid');

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(('http://localhost:8080/api/recipes/' + recipeId), { withCredentials: true });

        if (Array.isArray(response.data)) {
          setRecipes(response.data);
        } else {
          setRecipes([response.data]);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [recipeId]);

  const handleClick = async () => {
    try {
      const email = localStorage.getItem('couser').replace(/"/g, '');

      const response = await axios.post(`http://localhost:8080/api/SavedRecipes?email=${email}&recipeid=${recipeId}`, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(response);
    } catch (error) {
      console.error('Error fetching data:', error);
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
          <Link to="/signup" className="btn btn-sign up"><strong>Sign Up</strong></Link>
          <Link to="/login" className="btn btn-log in"><strong>Login</strong></Link>
        </Navbar.Collapse>
      </Navbar>
      <div className='svdrcps' id='root'>
        {recipes.map(recipe => (
          <Card key={recipe.recipeid} style={{ maxWidth: '540px' }} className="mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <Card.Img src={recipe.urlimage} className='homepageimages' alt='' />
              </div>
              <div className="col-md-8">
                <Card.Body>
                  <Card.Title>{recipe.titles}</Card.Title>
                  <Card.Text>{recipe.summary}</Card.Text>
                  <Card.Text><strong>Ingredients:</strong> {recipe.ingredients}</Card.Text>
                  <Card.Text><strong>Time:</strong> {recipe.duration}</Card.Text>
                  <Card.Text><strong>Difficulty Level:</strong> {recipe.difficulty}</Card.Text>
                  <Card.Text><strong>Type:</strong> {recipe.type}</Card.Text>                                 
                </Card.Body>
                <button onClick={handleClick} className="">Save</button>
              </div>
            </div>
          </Card>
        ))}
      </div>
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
  )

}

export default Recipe1;
