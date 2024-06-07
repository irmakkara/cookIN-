import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import cookINlogo from './images/cookINlogo.png';
import './AboutPageUS.css';
import './App.css';
import './RecipeAdd.css';

const RecipeAdd = () => {
  const [titles, setTitles] = useState('');
  const [summary, setSummary] = useState('');
  const [duration, setDuration] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [recipeType, setRecipeType] = useState('');
  const [eventType, setEventType] = useState('');
  const [steps, setSteps] = useState('');
  const [urlimage, setUrlimage] = useState('');

  const createRecipe = async () => {
    const recipeData = {
      titles,
      summary,
      duration,
      difficulty,
      ingredients,
      recipeType,
      eventType,
      steps,
      urlimage
    };

    try {
      const response = await axios.post('http://localhost:8080/api/recipes', recipeData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      alert('Recipe created successfully!');
      resetForm();
      window.location.href = 'http://localhost:3000';
    } catch (error) {
      console.error('Error creating recipe:', error);
      alert('Failed to create recipe. Please try again.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createRecipe();
  };

  const resetForm = () => {
    setTitles('');
    setSummary('');
    setDuration('');
    setDifficulty('');
    setIngredients('');
    setRecipeType('');
    setEventType('');
    setSteps('');
    setUrlimage('');
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
          <Link to="/" className="btn btn-log in"><strong>Log out</strong></Link>
        </Navbar.Collapse>
      </Navbar>
      <div className='recipeAdd'>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <div className='col-md-6'>
              <input className="form-control" type="text" placeholder="Title" value={titles} onChange={(e) => setTitles(e.target.value)} required />
            </div>
          </div>
          <div className="mb-3">
            <div className='col-md-6'>
              <input className="form-control" type="text" placeholder="Summary" value={summary} onChange={(e) => setSummary(e.target.value)} required />
            </div>
          </div>
          <div className="mb-3">
            <div className='col-md-6'>
              <input className="form-control" type="text" placeholder="Duration" value={duration} onChange={(e) => setDuration(e.target.value)} required />
            </div>
          </div>
          <div className="mb-3">
            <div className='col-md-6'>
              <input className="form-control" type="text" placeholder="Difficulty" value={difficulty} onChange={(e) => setDifficulty(e.target.value)} required />
            </div>
          </div>
          <div className="mb-3">
            <div className='col-md-6'>
              <input className="form-control" type="text" placeholder="Ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)} required />
            </div>
          </div>
          <div className="mb-3">
            <div className='col-md-6'>
              <input className="form-control" type="text" placeholder="Steps" value={steps} onChange={(e) => setSteps(e.target.value)} required />
            </div>
          </div>
          <div className="mb-3">
            <div className='col-md-6'>
              <select className="form-select" value={recipeType} onChange={(e) => setRecipeType(e.target.value)}>
                <option value="">Select recipe type</option>
                <option value="Breakfast">Recipes for Breakfast</option>
                <option value="Lunch">Soup Recipes</option>
                <option value="Dinner">Salad Recipes</option>
                <option value="Dessert">Pasta Recipes</option>
                <option value="Snack">Rice Recipes</option>
                <option value="Soup">Meat Recipes</option>
                <option value="Salad">Chicken Recipes</option>
                <option value="Sandwich">Vegetable Recipes</option>
                <option value="Appetizer">Fish Recipes</option>
                <option value="Dessert">Dessert Recipes</option>
              </select>
            </div>
          </div>
          <div className="mb-3">
            <div className='col-md-6'>
              <select className="form-select" value={eventType} onChange={(e) => setEventType(e.target.value)} required>
                <option value="">Select event type</option>
                <option value="All">All</option>
                <option value="Party">Party</option>
                <option value="Game Night">Game Night</option>
              </select>
            </div>
          </div>
          <div className="mb-3">
            <div className='col-md-6'>
              <input className="form-control" type="text" placeholder="Image Url" value={urlimage} onChange={(e) => setUrlimage(e.target.value)} required />
            </div>
          </div>
          <button className="btn btn-secondary" type="submit" style={{ textAlign: 'center', marginLeft: "200px" }}>Add Recipe</button>
        </form>
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
  );
}

export default RecipeAdd;
