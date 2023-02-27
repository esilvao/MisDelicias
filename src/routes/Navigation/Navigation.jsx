
import { Outlet , NavLink} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import  '../../pages/Reservas/Reservas.css';
import './Navegacion.css';
const Navigation = () => {
  return (
    <div id="todo">

      <Navbar expand="lg" >
      <Container>        
        <Navbar.Brand href="#home">LAS DELICIAS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/' >Home</Nav.Link>
            <Nav.Link as={NavLink} to='/reservas' >Reservas</Nav.Link>
            <Nav.Link as={NavLink} to='/register' >Registrar</Nav.Link>
            <Nav.Link as={NavLink} to='/contacto' >Contacto</Nav.Link>
            <Nav.Link as={NavLink} to='/product' >Productos</Nav.Link>
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item  as={NavLink} to='/Menu/ComidaChilena'>Comida Chilena</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/Menu/DeliciasDelMar'>Delicias del Mar</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/Menu/Postres'>Postres</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Aperitivos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Vinos</NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  )
}

export default Navigation