import { Routes } from "react-router-dom";
import "./App.css";
import About from "./components/about/About";
import Footer from "./components/contact/Footer";
import Header from "./components/header/Header";
import Projects from "./components/projects/Projects";
import Title from "./components/title/Title";

function App() {
  return (
    <div className="App">
      <Header />
      <Title />
      <About />
      <Projects />
      <Footer />
      <Routes>{/* <Route path="/about" element={<About />}></Route> */}</Routes>
    </div>
  );
}

export default App;
