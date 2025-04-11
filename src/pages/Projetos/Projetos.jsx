import React from "react";
import Card from "../../components/Card/Card";
import Style from "./Projetos.module.css";
const projetos = [
  {
    titulo: "Sistema de Login",
    descricao: "Projeto com tela de login.",
    imagem: "/pag-login.jpg",
    linkProjeto: "https://meuprojeto1.com",
    linkRepo: "https://github.com/seurepo1",
  },
];

const Projetos = () => {
  return (
    <section id="projetos" className={Style.cardsContainer}>
      {projetos.map((item, index) => (
        <Card
          key={index}
          titulo={item.titulo}
          descricao={item.descricao}
          imagem={item.imagem}
          linkProjeto={item.linkProjeto}
          linkRepo={item.linkRepo}
        />
      ))}
    </section>
  );
};
export default Projetos;
