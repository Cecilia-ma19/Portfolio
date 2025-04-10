import React from "react";
import Styles from "./Nav.module.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <header className={Styles.header}>
      <span>Cecília Maria</span>
      <nav className={Styles.nav}>
        <Link to="home" smooth={true} duration={300}>
          Home
        </Link>
        <Link to="sobre" smooth={true} duration={300}>
          Sobre
        </Link>
        <Link to="habilidades" smooth={true} duration={300}>
          Habilidades
        </Link>
        <Link to="projetos" smooth={true} duration={300}>
          Projetos
        </Link>
        <Link to="contatos" smooth={true} duration={300}>
          Contatos
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
