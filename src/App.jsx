import Navbar from "./components/Layout/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Leadership from "./components/Leadership/Leadership";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />

      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Leadership />
      <Contact />
    </>
  );
}

export default App;