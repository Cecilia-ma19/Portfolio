import React from "react";
import Card from "../../components/Card/Card";
import Style from "./Projetos.module.css";
const projetos = [
  {
    titulo: "Login Page",
    descricao: "Projeto com tela de login simples e responsiva.",
    imagem: "/pag-login.jpg",
    linkProjeto: "https://pagina-login-react.vercel.app",
    linkRepo: "https://github.com/Cecilia-ma19/pagina-login-react",
    tecnologias: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    titulo: "Clone ChatGPT",
    descricao: "Tela de login inspirada no layout do ChatGPT.",
    video: "/clone-chat.mp4",
    linkProjeto: "https://cecilia-ma19.github.io/ChatGPT-Clone-UI/",
    linkRepo: "https://github.com/Cecilia-ma19/ChatGPT-Clone-UI",
    tecnologias: ["HTML", "CSS"],
  },
];
const Projetos = () => {
  return (
    console.log(projetos),
    (
      <section id="projetos" className={Style.cardsContainer}>
        {projetos.map((item, index) => (
          <Card
            key={index}
            titulo={item.titulo}
            descricao={item.descricao}
            imagem={item.imagem}
            video={item.video}
            linkProjeto={item.linkProjeto}
            linkRepo={item.linkRepo}
            tecnologias={item.tecnologias}
          />
        ))}
      </section>
    )
  );
};
export default Projetos;
