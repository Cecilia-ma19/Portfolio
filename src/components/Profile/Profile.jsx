import React from "react";
import "tailwindcss";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="container">
      <div className="nav-bar">
        <nav>
          <ul className="nav-itens">
            <li className="logo-name">Cecília Maria</li>
            <li>Home</li>
            <li>Sobre</li>
            <li>Projetos</li>
            <li>Habilidades</li>
          </ul>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/cec%C3%ADlia-araujo-94895223b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={40} color="#000" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Cecilia-ma19"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={40} color="#000" />
              </a>
            </li>
          </ul>
        </nav>
        <div className="presentation">
          <p>Olá, eu sou a Cecília,</p>
          <h1>Desenvolvedora Front-End</h1>
        </div>
      </div>
    </div>
  );
};

export default Profile;
