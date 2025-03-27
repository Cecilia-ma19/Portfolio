import React from "react";
import Styles from "./Nav.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className={Styles.header}>
      <span>Cecília Maria</span>
      <nav className={Styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/projetos">Projetos</Link>
        <Link to="/contatos">Contatos</Link>
      </nav>
    </header>
  );
};

export default Navbar;
