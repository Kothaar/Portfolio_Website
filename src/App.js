import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import NavBar from "./components/NavBar";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route element={<Home />} path="" exact />
        <Route element={<About />} path="about" />
        <Route element={<Projects />} path="projects" />
        <Route element={<Contact />} path="contact" />
        <Route element={<Blog />} path="test" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
