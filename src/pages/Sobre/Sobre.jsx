import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Styles from "./Sobre.module.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaFigma } from "react-icons/fa";

const Sobre = () => {
  return (
    <>
      {/* Seção Sobre Mim */}
      <section id="sobre" className={Styles.sobre}>
        <figure>
          <img
            src="/sobre-teste.png"
            alt="Foto de perfil de Cecília Maria, desenvolvedora Front-End"
          />
        </figure>
        <div className={Styles.apresentacao}>
          <h1>Sobre mim</h1>

          <p>
            Olá, sou Cecília Maria, tenho 20 anos e sou formada em Análise e
            Desenvolvimento de Sistemas. Estou em busca de oportunidades para
            iniciar minha carreira como Desenvolvedora Front-End, com o objetivo
            de aprimorar minhas habilidades e adquirir experiência no mercado de
            trabalho. Tenho paixão por criar interfaces criativas e intuitivas,
            focadas na melhor experiência do usuário. Acredito que tecnologia e
            design caminham juntos para tornar a navegação mais envolvente e
            funcional. Meu propósito é contribuir com soluções inovadoras e
            seguir evoluindo continuamente na área da tecnologia.
          </p>
        </div>
      </section>

      {/* Seção Habilidades */}
      <section id="habilidades" className={Styles.skills}>
        <h2>Habilidades</h2>
        <p>Minhas principais habilidades:</p>
        <div className={Styles.skillsGrid}>
          <div className={Styles.skill}>
            <FaHtml5 className={Styles.icon} />
            <p>HTML</p>
          </div>
          <div className={Styles.skill}>
            <FaCss3Alt className={Styles.icon} />
            <p>CSS</p>
          </div>
          <div className={Styles.skill}>
            <FaJs className={Styles.icon} />
            <p>JavaScript</p>
          </div>
          <div className={Styles.skill}>
            <FaReact className={Styles.icon} />
            <p>ReactJS</p>
          </div>
          <div className={Styles.skill}>
            <FaFigma className={Styles.icon} />
            <p>Figma</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sobre;
