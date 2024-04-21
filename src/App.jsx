import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import ShowCertificate from "./components/ShowCertificate";

import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [currentImg, setCurrentImg] = useState("");

  const toggleOverlay = (img) => {
    setShowOverlay((curr) => !curr);
    setCurrentImg(img);
  };
  return (
    <div>
      {showOverlay && (
        <ShowCertificate onClick={toggleOverlay} currentImg={currentImg} />
      )}

      <Navbar></Navbar>

      <AboutMe />
      <Skills onClick={toggleOverlay} />
      <Contact />
    </div>
  );
}

export default App;
