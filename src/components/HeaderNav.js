import facebook from './images/Facebook.png'
import Spotify from './images/Spotify.png'
import Youtube  from './images/youtube.png'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";



function HeaderNav(){

 
return(

  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">MyBooks</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Link to="/">
      <Nav.Link href="#features">Accueil</Nav.Link>
      </Link>
      <Link to="/ListBooks">
      <Nav.Link href="#pricing">Bibliothèque</Nav.Link>
      </Link>
    </Nav>
    <Nav>
     <Nav.Link href="#deets"><img src={Spotify} style={{width:'20px',height:'20px'}}/></Nav.Link>
      <Nav.Link href="#deets"><img src={facebook} style={{width:'20px',height:'20px'}}/></Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        <img src={Youtube} style={{width:'20px',height:'20px'}}/>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    
);


}

export default HeaderNav;