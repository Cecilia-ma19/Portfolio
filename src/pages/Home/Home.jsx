import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-scroll";
import Styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <section className={Styles.container}>
        <div className={Styles.apresentacao}>
          <h1>
            Olá! Eu sou a Cecília, <br />
            <span>desenvolvedora Front-End.</span>
          </h1>
          <Link to="/sobre" smooth={true} duration={300}>
            Saiba mais
          </Link>
        </div>
        <figure>
          <img className="img-home" src="/avatar.webp" alt="Imagem de Home" />
        </figure>
      </section>
    </>
  );
};

export default Home;
