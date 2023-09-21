import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import HeroForm from "./components/HeroForm";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroForm/>
    </div>
  );
}

export default App;
