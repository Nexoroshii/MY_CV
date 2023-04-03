import "./styles/main.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";

import ScrollToTop from "./utils/scrollToTop";
import Skills from "./pages/Skills";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>

        <Footer />
      </Router>

      {/* <script src="./js/main.js"></script> */}
    </div>
  );
}

export default App;
