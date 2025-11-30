import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";




function App() {
  return (
    <div className="bg-dark text-light">
      <Navbar />
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="experience"><Experience /></section>
      <section id="contact"><Contact /></section>
  

      <footer className="footer-section text-center py-4 text-secondary">
        © {new Date().getFullYear()} Aarthiya M
      </footer>
    </div>
  );
}

export default App;
