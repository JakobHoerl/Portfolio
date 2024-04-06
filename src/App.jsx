import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Navbar></Navbar>

      <AboutMe />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
