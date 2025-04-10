import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Contatos from "./pages/Contatos/Contatos";
import Home from "./pages/Home/Home"; // Importando a Home
import Projetos from "./pages/Projetos/Projetos";
import Sobre from "./pages/Sobre/Sobre"; // Importando Sobre

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Sobre />
      <Projetos />
      <Contatos />
      <Footer />
    </>
  );
}

export default App;
