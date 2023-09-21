import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import HeroForm from "./components/HeroForm";
import Review from "./components/review";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroForm />
      <Review />
      <Review />
      <Footer />
    </div>
  );
}

export default App;
