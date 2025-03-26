import React from "react";
import Styles from "./Nav.module.css";

const Navbar = () => {
  return (
    <header className={Styles.header}>
      <span>Cecília Maria</span>
      <nav className={Styles.nav}>
        <a href="">Home</a>
        <a href="">Sobre</a>
        <a href="">Projetos</a>
        <a href="">Contatos</a>
      </nav>
    </header>
  );
};

export default Navbar;
