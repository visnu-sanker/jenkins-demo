import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

const Topbar = () => {

  const navigate = useNavigate();

  const handleClose = () => {

    sessionStorage.removeItem("accessToken")
    navigate('/')
  };


   return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">Doctor Application</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/doctors">Doctors List</Nav.Link>
        {/* { sessionStorage.getItem("accessToken")&&<Nav.Link href="/add">Add Doctor</Nav.Link> } */}
        { sessionStorage.getItem("accessToken")&&<Nav.Link href="/addDoc">Add Doctor</Nav.Link> }
        { sessionStorage.getItem("accessToken")&&<Nav.Link href="/doclogin">Dashboard</Nav.Link> }
        { sessionStorage.getItem("accessToken")&& <Nav.Link onClick={handleClose}>Logout </Nav.Link> }
        { !sessionStorage.getItem("accessToken")&& <Nav.Link href="/login" onClick={handleClose}>Login </Nav.Link> }
        <Nav.Link href="/addPat">Add Patient</Nav.Link>

      </Nav>                                                            
    </Container>
  </Navbar>
  )
}

export default Topbar