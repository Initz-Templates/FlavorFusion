import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Login from './pages/Login';
// import { useFirebase } from './context/Firebase';
import Admin from './pages/Admin';

function App() {

  // const firebase = useFirebase();

  // const handleLogout = () => {
  //   firebase.handleLogout();
  // }
  
  return (
    <div>
      {/* style={{display: 'contents'}}  */}
      <Navbar expand="lg" className>
        <Container>
          <Navbar.Brand>
            <Link to="/" className='navbar-brand fw-semibold' id="navHeading">
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
          {/* style={{marginLeft: "4rem"}} */}
            <Nav className='me-auto justify-content-end w-100 m-10px'>
              <Nav.Link href='/' className='active text-uppercase fw-bold'>Home</Nav.Link>
              <Nav.Link href='/menu' className='active text-uppercase fw-bold'>Menu</Nav.Link>
              <Nav.Link href='/about' className='active text-uppercase fw-bold'>About</Nav.Link>
              <Nav.Link href='/contact' className='active text-uppercase fw-bold'>Contact</Nav.Link>
              {/* <Nav.Link href='/register' className='active text-uppercase'>Register</Nav.Link>
              <Nav.Link href='/login' className='active text-uppercase'>Login</Nav.Link>
              <Nav.Link href='/admin' className='active text-uppercase'>Admin</Nav.Link>
              <Nav.Link href='/' className='active text-uppercase' onClick={handleLogout}>Logout</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={ <Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>

      <footer className='bg-body-tertiary'>
        <p className='p-3 m-0 text-center'>© 2024, Made with
❤️
by 

<span> {" "} <a href='https://www.initializ.ai/'>
 initializ inc.
</a></span>

</p>
      </footer>
    </div>
  );
}
export default App;