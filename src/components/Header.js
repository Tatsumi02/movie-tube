import React from 'react'
import '../style/Header.css'
import {Navbar,Container,Nav,Form,Button,FormControl,NavDropdown} from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import App from '../App'


class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){

        return(
            <div id=""> 

    <Router>


                <Navbar bg="secondary" fixed="top" variant="dark" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>

      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-dark">Search</Button>
      </Form>


    </Navbar.Collapse>
  </Container>
</Navbar>



       

 </Router>
             </div>
        )
    }

}

export default Header;