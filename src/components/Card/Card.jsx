import React from "react";
import Style from "./Card.module.css";
import { FaHtml5, FaCss3, FaReact, FaJs } from "react-icons/fa";

const Card = ({ titulo, descricao, imagem }) => {
  return (
    <section className={Style.card}>
      <img src={imagem} alt={titulo} />
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <div className={Style.card_footer}>
        <div className={Style.card_icones}>
          <FaHtml5 title="Html" />
          <FaCss3 title="Css" />
          <FaJs title="JavaScript" />
          <FaReact title="React" />
        </div>

        <div className={Style.card_botoes}>
          <a
            className={Style.card_botao}
            href="https://pagina-login-react-git-main-cecilia-ma19s-projects.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Projeto
          </a>
          <a
            className={Style.card_botao}
            href="https://github.com/Cecilia-ma19/pagina-login-react.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            Repositorio
          </a>
        </div>
      </div>
    </section>
  );
};

export default Card;
