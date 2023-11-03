import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/" className="nav-link">
            Cadastro
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/" className="nav-link">
            Login
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/despesa" className="nav-link">
            Despesas
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/contato" className="nav-link">
            Contato
          </Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default NavBar;
