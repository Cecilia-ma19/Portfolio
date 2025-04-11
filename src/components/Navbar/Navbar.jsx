import React, { useState } from "react";
import Styles from "./Nav.module.css";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi"; // ícone do hamburguer

const Navbar = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className={Styles.header}>
      <span className={Styles.logo}>Cecília Maria</span>

      <button
        className={Styles.hamburguer}
        onClick={() => setMenuAberto(!menuAberto)}
      >
        <GiHamburgerMenu />
      </button>

      <nav className={`${Styles.menu} ${menuAberto ? Styles.ativo : ""}`}>
        <Link
          to="home"
          smooth={true}
          duration={300}
          onClick={() => setMenuAberto(false)}
        >
          Home
        </Link>
        <Link
          to="sobre"
          smooth={true}
          duration={300}
          onClick={() => setMenuAberto(false)}
        >
          Sobre
        </Link>
        <Link
          to="habilidades"
          smooth={true}
          duration={300}
          onClick={() => setMenuAberto(false)}
        >
          Habilidades
        </Link>
        <Link
          to="projetos"
          smooth={true}
          duration={300}
          onClick={() => setMenuAberto(false)}
        >
          Projetos
        </Link>
        <Link
          to="contatos"
          smooth={true}
          duration={300}
          onClick={() => setMenuAberto(false)}
        >
          Contatos
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
