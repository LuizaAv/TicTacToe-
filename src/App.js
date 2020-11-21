import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';
import Container from 'react-bootstrap/Container';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      title: "Luiza Portfolio",
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
        <Container fluid={true}>
          <p>ghdgdgdgdg</p>
        </Container>
      </Router>
    )
  }
}

export default App;
