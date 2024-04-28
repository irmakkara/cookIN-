import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import cookINlogo from './images/cookINlogo.png';
import sademakarna from './images/sademakarna.png';
import nate from './images/natefisher.png';
import theo from './images/theo.png';
import './App.css';

function Recipe1() {
    const [recipes, setRecipes] = useState([
        {
            id: 1,
            title: "Makarna",
            summary: "Önce tencerede su kaynatılır. Daha sonra bir paket makarna kaynar suya dökülür. Sonra yağ ve tuz eklenir. Paketteki pişme süresi kadar pişirilir. Daha sonra süzülür ve bir süre daha haşlanır.",
            ingridients: "1 paket makarna, 1 tencere su, tuz, tereyağ.",
            eventType: "Parti.",
            type: "Pasta Recipes.",
            difficultiyLevel: "4/10.",
            time: "10 minutes.",
            imgURL: sademakarna
        }
    ]);

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
          <Link to="/signup" className="btn btn-sign up"><strong>Sign Up</strong></Link>
          <Link to="/login" className="btn btn-log in"><strong>Login</strong></Link>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btnSearch" type="submit">Search</button>
          </form>
        </Navbar.Collapse>
    </Navbar>
    <div className='svdrcps' id='root'>
            {recipes.map(recipe => (
                <Card key={recipe.id} style={{ maxWidth: '540px' }} className="mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <Card.Img src={recipe.imgURL} className='homepageimages' alt='' />
                        </div>
                        <div className="col-md-8">
                            <Card.Body>
                                <Card.Title>{recipe.title}</Card.Title>
                                <Card.Text>{recipe.summary}</Card.Text>
                                <Card.Text><strong>Ingredients:</strong> {recipe.ingridients}</Card.Text>
                                <Card.Text><strong>Time:</strong> {recipe.time}</Card.Text>
                                <Card.Text><strong>Difficulty Level:</strong> {recipe.difficultiyLevel}</Card.Text>
                                <Card.Text><strong>Event Type:</strong> {recipe.eventType}</Card.Text>
                                <Card.Text><strong>Type:</strong> {recipe.type}</Card.Text>
                            </Card.Body>
                        </div>
                    </div>
                </Card>
            ))}
      </div>
      <section>
        <div className='comments'>
        <div className="container my-5 py-5 text-body">
          <div className="row d-flex justify-content-center">
            <div className="col-md-11 col-lg-9 col-xl-7">
                <div className="d-flex flex-start mb-4">
                    <img className="rounded-circle shadow-1-strong me-3"
                      src={theo} alt="avatar" width="65"
                      height="65" 
                    />
                    <div className="card w-100" style={{ maxWidth: '1000px' , maxHeight: '1000px'}}>
                        <div className="card-body p-4">
                            <div className="">
                              <h5>Theo James</h5>
                              <p className="small">3 hours ago</p>
                              <p>tarifin çok güzel. evdeki herkes bayıldı. ellerinize sağlık.</p>
                                <a href="#!" className="link-muted"><i className="fas fa-reply me-1"></i> Reply</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-start">
                    <img className="rounded-circle shadow-1-strong me-3"
                      src={nate} alt="avatar" width="65"
                      height="65" 
                    />
                    <div className="card w-100" style={{ maxWidth: '1000px', maxHeight: '1000px' }}>
                      <div className="card-body p-4" >
                        <div className="">
                          <h5>Nate Fisher</h5>
                          <p className="small">5 hours ago</p>
                          <p>çok faydalı bir tarif. bundan sonra hep kullanacağım.</p>
                          <a href="#!" className="link-muted"><i className="fas fa-reply me-1"></i> Reply</a>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
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
    )
  
}

export default Recipe1;
