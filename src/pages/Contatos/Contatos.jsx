import React from "react";
import Styles from "./Contatos.module.css";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";

const Contato = () => {
  return (
    <section id="contatos" className={Styles.contato}>
      <h2>Vamos conversar?</h2>
      <p className={Styles.subtitulo}>Entre em contato ou me siga nas redes:</p>

      <div className={Styles.redes}>
        <a
          href="https://www.linkedin.com/in/cec%C3%ADlia-araujo-94895223b/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className={Styles.icone} /> LinkedIn
        </a>
        <a
          href="https://github.com/Cecilia-ma19"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className={Styles.icone} /> GitHub
        </a>
        <a href="mailto:cecilia.msaraujo9@gmail.com">
          <FaEnvelope className={Styles.icone} /> Email
        </a>
      </div>
    </section>
  );
};

export default Contato;
