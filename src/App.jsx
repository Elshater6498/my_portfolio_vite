import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Contact from "./pages/contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
