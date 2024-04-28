import React, { useState } from 'react';
import RecipeList from './RecipeList';
import FollowersList from './FollowersList';
import FollowingList from './FollowingList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import cookINlogo from './images/cookINlogo.png';
import './AboutPageUS.css';
import './App.css';

function Profile() {
  const placeholderImageUrl = "https://via.placeholder.com/150";

  const [profilePicture, setProfilePicture] = useState(null);
  const [showRecipes, setShowRecipes] = useState(false);
  const [showFollowers, setShowFollowers] = useState(false);
  const [showFollowing, setShowFollowing] = useState(false);
  const [user, setUser] = useState({
    name: 'Kendall Roy',
    username: 'kendallroy777',
    followers: 10,
    following: 5,
    saved_recipes: 4
  });

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

  function handleShowFollowers() {
    setShowFollowers(true);
  }

  function handleCloseFollowers() {
    setShowFollowers(false);
  }

  function handleShowFollowing() {
    setShowFollowing(true);
  }

  function handleCloseFollowing() {
    setShowFollowing(false);
  }

  function handleRemovePicture() {
    setProfilePicture(null);
    document.getElementById("profile-picture-upload").value = null;
  }
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
          <Link to="/" className="btn btn-log in"><strong>Log out</strong></Link>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btnSearch" type="submit">Search</button>
          </form>
        </Navbar.Collapse>
    </Navbar>
    <div className="content" id='root'>
      <div className="btnAddRecipe">
        <Link to="/AddRecipe" className="btn btn-log in"><strong>Add Recipe.</strong></Link>
      </div>
      <div className="profile">
        <div className="profile-header" style={{marginLeft:'15px', marginTop:'10px'}}>
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
            <h2>{user.name}</h2>
            <div>
            <p>@{user.username}</p>
            </div>
            <div>
            <strong onClick={handleShowRecipes}> {user.saved_recipes}</strong> saved_recipes
            </div>
            <div style={{marginTop: '10px'}}>
            <strong onClick={handleShowFollowers}>{user.followers}</strong> followers
            </div>
            <div style={{marginTop: '10px'}}>
            <strong onClick={handleShowFollowing}> {user.following}</strong> following
            </div>
          </div>
        </div>
      </div>
    </div>
      {showRecipes && <RecipeList onClose={handleCloseRecipes} />}
      {showFollowers && <FollowersList onClose={handleCloseFollowers} />}
      {showFollowing && <FollowingList onClose={handleCloseFollowing} />}
     <br></br>
     <br></br> 
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
  
export default Profile;
