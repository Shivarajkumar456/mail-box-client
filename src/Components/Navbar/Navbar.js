import React from "react";
import { Navbar, Nav, Container, NavLink } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions } from "../../store/Auth";

const MyNavbar = ()=> {
    const isLoggedIn = useSelector(state=> state.auth.isLoggedin);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logoutHandler = (e) => {
      e.preventDefault();
      dispatch(authActions.logout());
      alert("logout successful");
      navigate('/login');
    }
  return (
    <>
      <div>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          className=" p-3 fixed-top "
        >
          <Container>
            <Navbar.Brand>Mail-Box</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link to="/home" className="h6">
                  Home
                </Nav.Link>
                {isLoggedIn && <NavLink to="/logout" onClick={logoutHandler} className="h6">
                  Logout
                </NavLink>}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <br />
      <br />
      <br />
    </>
  );
}

export default MyNavbar;