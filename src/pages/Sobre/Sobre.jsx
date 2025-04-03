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
            src="/sobre.png"
            alt="Foto de perfil de Cecília Maria, desenvolvedora Front-End"
          />
        </figure>
        <div className={Styles.apresentacao}>
          <h1>Sobre mim</h1>
          <span></span>
          <p>
            Olá, sou Cecília Maria, tenho 20 anos e sou formada em Análise e
            Desenvolvimento de Sistemas. Estou em busca de oportunidades para
            iniciar minha carreira como Desenvolvedora Front-End, aprimorar
            minhas habilidades e ganhar experiência no mercado de trabalho. Sou
            apaixonada por criar interfaces criativas e envolventes, tornando a
            experiência do usuário mais intuitiva e divertida. Meu objetivo é
            contribuir com soluções inovadoras e continuar evoluindo na área de
            tecnologia.
          </p>
        </div>
      </section>

      {/* Seção Habilidades */}
      <section id="habilidades" className={Styles.skills}>
        <h2>Habilidades</h2>
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
