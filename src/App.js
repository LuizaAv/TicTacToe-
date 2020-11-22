import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Footer from "./components/Footer"

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      title: "Luiza's Portfolio",
      headerLinks: [
        {title: 'Home', path: "/"},
        {title: 'About', path: "/about"},
        {title: 'Contact', path: "/contact"}
      ], 
      home: {
        title: "Don't stop input more efforts  in your study",
        subtitle: "You  can  checkout  my projects below"
      },
      about: {
        title: "About me"
      },
      contact: {
        title: "Please, be free to ask me your qestions"
      }
    }
  }

  render(){
    return(
      <Router>
        <Container fluid={true} className= "p-0">
         <Navbar className="border-bottom" bg="transparent" expand="lg">
          <Navbar.Brand>Luiza's Portfolio</Navbar.Brand>
          <Navbar.Toggle  className="border-0" aria-controls = "navbar-toggle"/>
          <Navbar.Collapse id="navbar-toggle">
            <Nav className= "ml-auto">
              <Link  className = "nav-link" to="/">Home</Link>
              <Link  className = "nav-link" to="/about">About</Link>
              <Link  className = "nav-link" to="/contact">Contact</Link>
            </Nav>
          </Navbar.Collapse>
         </Navbar>

         <Footer/>
         
        </Container>
      </Router>
    )
  }
}

export default App;
