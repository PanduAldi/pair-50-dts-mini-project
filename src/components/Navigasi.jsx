import React from "react";
import logo from "../logo.svg";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Logo from "../logo.svg";
import { Button } from "@mui/material";

import { auth, userLogout } from "../authentication/firebase";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
//import { query, collection, getDocs, where } from "firebase/firestore";

const Navigasi = () => {
  const [user, loading, err] = useAuthState(auth);
  const navigate = useNavigate();

  const buttonLogoutOnClickHandler = async () => {
    // Kita akan memanggil fungsi keluarDariApps di sini
    await userLogout();
    navigate("/login");
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand href="/">
              <img src={Logo} alt="" width={30} height={30} />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link> 🏠Home </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/trending">
                <Nav.Link>🔥Trending</Nav.Link>
              </LinkContainer>
            </Nav>
            <Nav>
              {!user ? (
                <LinkContainer to="/login">
                  <Nav.Link>Login</Nav.Link>
                </LinkContainer>
              ) : (
                <>
                  <Nav.Link>Halo, {user.email}</Nav.Link>
                  <Button
                    color="inherit"
                    sx={{ color: "white" }}
                    onClick={buttonLogoutOnClickHandler}
                  >
                    Logout
                  </Button>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigasi;
