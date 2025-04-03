import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home"; // Importando a Home
import Sobre from "./pages/Sobre/Sobre"; // Importando Sobre

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Sobre />
    </>
  );
}

export default App;
