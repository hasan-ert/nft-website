//style
import "./Navbar.css";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function CustomNavbar({ scrollHandler, refArr }) {
    const expand = "md";
    return (
        <>
            <Navbar
                key={expand}
                expand={expand}
                className="custom-navbar-container"
                fixed="top"
                collapseOnSelect
            >
                <Container fluid>
                    <Navbar.Brand href="#" className="navbar-brand">
                        {" "}
                        NFT
                    </Navbar.Brand>
                    <Navbar.Toggle
                        aria-controls={`offcanvasNavbar-expand-${expand}`}
                    />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title
                                id={`offcanvasNavbarLabel-expand-${expand}`}
                            >
                                Vina
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3 nav-options">
                                <Nav.Link
                                    href="#hero"
                                    onClick={() =>
                                        scrollHandler("hero-main-container")
                                    }
                                >
                                    Home
                                </Nav.Link>
                                <Nav.Link
                                    href="#about_us"
                                    onClick={() =>
                                        scrollHandler("aboutus-main-container")
                                    }
                                >
                                    About
                                </Nav.Link>
                                <Nav.Link
                                    href="#roadmap"
                                    onClick={() =>
                                        scrollHandler("roadmap-main-container")
                                    }
                                >
                                    Roadmap
                                </Nav.Link>
                                <Nav.Link
                                    href="#token"
                                    onClick={() =>
                                        scrollHandler("token-main-container")
                                    }
                                >
                                    Token
                                </Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}
