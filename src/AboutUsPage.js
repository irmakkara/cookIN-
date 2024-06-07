import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import cookINlogo from './images/cookINlogo.png';
import sef from './images/sef.png';
import sofra from './images/sofra.png';
import tadim from './images/tadim.png.jpg';
import './App.css';
import './AboutPageUS.css';

function AboutUsPage() {
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
        </Navbar.Collapse>
    </Navbar>
    <h1 className="home-title">What is cookIN' ?</h1>
    <div className="container">
      <div className="left-section">
        <div>
          <h2 className="title">Cook delicious meals for yourself and your loved ones</h2>
            <p className="text">
              cookIN' is everyone's ultimate destination for discovering recipes. We believe that cooking should be enjoyable and accessible, that's why you can find any recipe based on the main ingredient, meal or event type, and even difficulty level. We aim to prove that everyone can be a chef of their own kitchen!
            </p>
            <p className="text" style={{padding:"20px"}}>
              Whether you're looking for inspiration, guidance, or simply a place to share your love of food, cookIN' is here to help you on your culinary journey.
            </p>
        </div>
        <div>
        <img src={tadim} className='aboutusimages' alt='' style={{padding:"20px"}} />
        </div>
        <div>
        <h2 className="title">Connect with other Food Lovers</h2>
        <p className="text" >
          cookIN' is more than just a recipe website. It's a community, a social platform for people who love to share their passion for cooking. You can add your own recipes to the website, save a recipe, like recipes, and comment on them by signing in. If you don't have an account, you can easily sign up!
        </p>
        </div>
      </div>
      <div className="right-section">
        <div>
        <img src={sofra} className='aboutusimages' alt='' style={{padding:"40px"}}/>
        </div>
        <div>
        <h4 className="text" style={{padding:"100px"}}>Let's cook, create, and connect together!</h4>
        </div>
        <div>
        <img src={sef} className='aboutusimages' alt=''/>
        </div>
      </div>
    </div>
    <div className="section-3">
          <div className="skills">
            <h2 className="footerTitle">Positive Aspects of cookIN'</h2>
            <ul>
              <li><p className="skills-text">Discover recipes</p></li>
              <li><p className="skills-text">Time management in the kitchen</p></li>
              <li><p className="skills-text">Following cooking techniques and instructions</p></li>
              <li><p className="skills-text">Experimenting with new ingredients and cooking methods</p></li>
              <li><p className="skills-text">Sharing cooking tips and tricks</p></li>
              <li><p className="skills-text">Hosting culinary events</p></li>
              <li><p className="skills-text">Connect with food lovers</p></li>
            </ul>
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

export default AboutUsPage;