import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import About from "./components/about/About";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Routes>
        {/* <Route path="/about" element={<About />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
