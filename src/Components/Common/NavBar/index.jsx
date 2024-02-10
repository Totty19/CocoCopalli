import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {BrowserRouter, Route, Routes, NavLink} from 'react-router-dom';
import { ContacUbic,Nosotros,Dashboard, Tasks, Cart, Task} from '../index';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLocationDot, faUsers} from '@fortawesome/free-solid-svg-icons'
import { ItemListCont } from '../../ItemListCont';
import { ItemDetailCont } from '../../itemDetailCont';
import { CheckOut } from '../../checkout';


const NavBar = () =>{ 
return (
    <BrowserRouter>
        <nav className='NvBar'>
                <Container className='ConTitulo'>
                    <NavLink to="/">CocoCopalli</NavLink>
                </Container>    
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                    <NavLink to="/contacto-ubicacion" className='link'>
                                        Contacto y ubicacion
                                        <FontAwesomeIcon icon={faLocationDot} className='icon'/>
                                    </NavLink>
                                    <NavDropdown title="Productos" id="collasible-nav-dropdown" menuVariant="dark">
                                        <NavLink to="/category/sahumerios" className='Cont link'>
                                            Sahumerios
                                        </NavLink>
                                        <NavDropdown.Divider />
                                        <NavLink to="/category/portaSahumerios" className='Cont link'>
                                            Porta Sahumerios
                                        </NavLink>
                                    </NavDropdown>
                                </Nav>
                                <Nav>
                                    <NavLink to="/Nosotros" className='link'>
                                        Sobre Nosotros
                                        <FontAwesomeIcon icon={faUsers} className='icon' />
                                    </NavLink>
                                </Nav>
                            </Navbar.Collapse>
                    </Container>
                </Navbar>
            </nav>
        <Routes>
            <Route path='/contacto-ubicacion' element={<ContacUbic />} />
            <Route path='/category/:categoryId' element={<ItemListCont />} />
            <Route path='/item/:itemId' element={<ItemDetailCont />} />
            <Route path='/Nosotros' element={<Nosotros />} />
            <Route path='/' element={<Dashboard />} />
            <Route path='/tasks' element={<Tasks />} />
            <Route path='/task' element={<Task />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/Checkout' element={<CheckOut />} />
        </Routes>
    </BrowserRouter>


);
}

export { NavBar }