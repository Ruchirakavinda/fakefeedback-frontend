import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import HeroForm from "./components/HeroForm";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Footer />
      <HeroForm />
    </div>
  );
}

export default App;
