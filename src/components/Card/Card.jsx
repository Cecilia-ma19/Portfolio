import React from "react";
import Style from "./Card.module.css";
import { FaHtml5, FaCss3, FaReact, FaJs } from "react-icons/fa";

const Card = ({
  titulo,
  descricao,
  imagem,
  linkProjeto,
  linkRepo,
  tecnologias,
  video,
}) => {
  return (
    <section className={Style.card}>
      {video ? (
        <video
          className={Style.cardVideo}
          src={video}
          autoPlay
          loop
          muted
          playsInline
        />
      ) : (
        <img src={imagem} alt={titulo} />
      )}

      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <div className={Style.card_footer}>
        <div className={Style.card_icones}>
          {tecnologias.map((tec, index) => {
            switch (tec.toLowerCase()) {
              case "html":
                return <FaHtml5 key={index} title="HTML" />;
              case "css":
                return <FaCss3 key={index} title="CSS" />;
              case "javascript":
                return <FaJs key={index} title="JavaScript" />;
              case "react":
                return <FaReact key={index} title="React" />;
              default:
                return <span key={index}>{tec}</span>;
            }
          })}
        </div>

        <div className={Style.card_botoes}>
          <a
            className={Style.card_botao}
            href={linkProjeto}
            target="_blank"
            rel="noopener noreferrer"
          >
            Projeto
          </a>
          <a
            className={Style.card_botao}
            href={linkRepo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Repositório
          </a>
        </div>
      </div>
    </section>
  );
};

export default Card;
