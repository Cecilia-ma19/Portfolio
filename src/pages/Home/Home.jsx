import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="container">
        <div className="apresentacao">
          <h1>
            Olá! Eu sou a Cecília, <br />
            <span>desenvolvedora Front-End.</span>
          </h1>
          <Link to="/sobre" className="btn">
            Saiba mais
          </Link>
        </div>
        <figure>
          <img className="img-home" src="/avatar.webp" alt="Imagem de Home" />
        </figure>
      </section>
      <Footer />
    </>
  );
};

export default Home;
