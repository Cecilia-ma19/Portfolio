import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <section className="container">
        <div className="apresentacao">
          <h1>
            Olá! Eu sou a Cecília, <br />
            <span>desenvolvedora Front-End.</span>
          </h1>
          <button className="btn">Saiba mais</button>
        </div>
        <figure>
          <img className="img-home" src="/avatar.webp" alt="Imagem de Home" />
        </figure>
      </section>
      <Footer />
    </div>
  );
}

export default App;
