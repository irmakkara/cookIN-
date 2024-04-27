import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import cookINlogo from './images/cookINlogo.png';
import './App.css';
import './AboutPageUS.css';

function AboutUsPage() {
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
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btnSearch" type="submit">Search</button>
          </form>
        </Navbar.Collapse>
    </Navbar>
      <h1 className="home-title">What is cookIN' ?</h1>
      <div className="hero">
        <div className="col">
          <h2 className="title">Cook delicious meals for yourself and your loved ones</h2>
          <p className="text">
            cookIN' is everyone's ultimate destination for discovering recipes. We believe that cooking should be enjoyable and accessible, that's why you can find any recipe based on the main ingredient, meal or event type, and even difficulty level. We aim to prove that everyone can be a chef of their own kitchen!
          </p>
          {/* İlgili resimler buraya eklenecek */}
          <p className="text">
            Whether you're looking for inspiration, guidance, or simply a place to share your love of food, cookIN' is here to help you on your culinary journey.
          </p>
          <h4 className="text">Let's cook, create, and connect together!</h4>
          {/* İlgili resimler buraya eklenecek */}
        </div>
        <div className="col">
          {/* İlgili resimler buraya eklenecek */}
          <h2 className="title">Connect with other Food Lovers</h2>
          <p className="text">
            cookIN' is more than just a recipe website. It's a community, a social platform for people who love to share their passion for cooking. You can add your own recipes to the website, save a recipe, like recipes, and comment on them by signing in. If you don't have an account, you can easily sign up!
          </p>
          <div className="section-3">
            <div className="skills">
              <h2 className="title">Positive Aspects of cookIN'</h2>
              <ul>
                <li><p className="text">Discover recipes</p></li>
                <li><p className="text">Time management in the kitchen</p></li>
                <li><p className="text">Following cooking techniques and instructions</p></li>
                <li><p className="text">Experimenting with new ingredients and cooking methods</p></li>
                <li><p className="text">Sharing cooking tips and tricks</p></li>
                <li><p className="text">Hosting culinary events</p></li>
                <li><p className="text">Connect with food lovers</p></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-section">
          <p className="title">cookIN'</p>
          <p>cookIN' for yourself and your loved ones tasty dishes using the recipes on our website. cookIN' is your go-to destination for mouthwatering recipes and culinary inspiration.</p>
        </div>
        <div className="footer-section">
          <p className="title">Who Are We?</p>
          <p>Aleyna İslamoğlu</p>
          <p>Irmak Kara</p>
          <p>Dilruba Kaya</p>
          <p>Irmak Koç</p>
        </div>
        <div className="footer-section">
          <p className="title">Contact Us</p>
          <p>cookin@mail.com</p>
        </div>
      </div>
    </div>
    );
}

export default AboutUsPage;