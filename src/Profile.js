import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import cookINlogo from './images/cookINlogo.png';
import './AboutPageUS.css';
import './App.css';
import RecipeList from './RecipeList';

function Profile() {
  const placeholderImageUrl = "https://via.placeholder.com/150";

  const [profilePicture, setProfilePicture] = useState(null);
  const [showRecipes, setShowRecipes] = useState(false);
  const [user, setUser] = useState({
    id: null,
    email: '',
    name: '',
    username: '',
    followers: 0,
    following: 0,
    saved_recipes: 0
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/users/profile', { withCredentials: true });
        setUser(response.data);
        localStorage.setItem('couserid', JSON.stringify(response.data.id));
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    const fetchSavedRecipes = async () => {
      if (user.id) {
        try {
          const response = await axios.get('http://localhost:8080/api/savedrecipes/user/' + user.id, { withCredentials: true });
          setUser(prevUser => ({ ...prevUser, saved_recipes: response.data.length }));
        } catch (error) {
          console.error('Error fetching saved recipes:', error);
        }
      }
    };

    fetchSavedRecipes();
  }, [user.id]);

  function handleFileInputChange(e) {
    e.preventDefault();
    const file = e.target.files[0];
    setProfilePicture(file);
  }

  function handleUploadButtonClick() {
    document.getElementById("profile-picture-upload").click();
  }

  function handleShowRecipes() {
    setShowRecipes(true);
  }

  function handleCloseRecipes() {
    setShowRecipes(false);
  }

  function handleRemovePicture() {
    setProfilePicture(null);
    document.getElementById("profile-picture-upload").value = null;
  }

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
      <div className="content" id='root'>
        <div className="btnAddRecipe">
          <Link to="/AddRecipe" className="btn btn-log in"><strong>Add Recipe.</strong></Link>
        </div>
        <div className="profile">
          <div className="profile-header" style={{ marginLeft: '15px', marginTop: '10px' }}>
            <div className="profile-picture-container">
              <img
                className="profile-picture"
                src={profilePicture ? URL.createObjectURL(profilePicture) : placeholderImageUrl}
                alt="Profile"
              />
            </div>
            <div className='btnContainer'>
              <button className="btnSearch" onClick={handleUploadButtonClick}>Add profile picture.</button>
              <button className="btnSearch" onClick={handleRemovePicture}>Remove.</button>
              <input
                id="profile-picture-upload"
                type="file"
                accept="image/*"
                onChange={handleFileInputChange}
                style={{ display: "none" }}
              />
            </div>
            <div className="profile-info">
              <h2>{user.name} {user.surname}</h2>
              <div>
                <p>@{user.username}</p>
              </div>
              <div onClick={handleShowRecipes}>
                <strong>{user.saved_recipes}</strong> saved recipes
              </div>
            </div>
          </div>
        </div>
      </div>
      {showRecipes && <RecipeList onClose={handleCloseRecipes} />}
      <br></br>
      <br></br>
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

export default Profile;
