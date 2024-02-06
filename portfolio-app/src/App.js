import { Routes } from "react-router-dom";
import "./App.css";
import About from "./components/about/About";
import Footer from "./components/contact/Footer";
import Header from "./components/header/Header";
import Title from "./components/title/Title";
import HomePage from "./components/homepage/HomePage";
import Projects from "./components/projects/Projects";
import Proj from "./components/projects/Proj";

function App() {
  return (
    <div className="App">
      <Header />
      <Title />
      <About />
      <Projects />
      {/* <Proj /> */}
      <Footer />
      {/* <HomePage */}
      <Routes>{/* <Route path="/about" element={<About />}></Route> */}</Routes>
    </div>
  );
}

export default App;
