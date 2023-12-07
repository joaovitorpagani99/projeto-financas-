import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import styles from "../../Components/Menu/navbar.module.css";

const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <Nav className="justify-content-center" activeKey="/home">
        <h2 > Finanças</h2>
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
    </div>
  );
};

export default NavBar;
