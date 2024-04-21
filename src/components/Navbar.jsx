import { useState } from "react";

export default function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick((curr) => !curr);
  };

  return (
    <div className="nav border container-fluid  justify-content-center">
      <div
        style={{ width: "90%", height: "100%" }}
        className="nav-desktop d-flex justify-content-between align-items-center"
      >
        <div
          style={{ height: "100%" }}
          className="name d-flex align-items-center"
        >
          <span>Jakob Hörl</span>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <div className="d-flex gap-3">
            <a href="#about-me">
              <span style={{ cursor: "pointer" }}>Über Mich</span>
            </a>
            <a href="#projects">
              <span style={{ cursor: "pointer" }}>Projekte</span>
            </a>
            <a href="#certificates">
              <span style={{ cursor: "pointer" }}>Zertifikate</span>
            </a>
            <a href="#contacts">
              <span style={{ cursor: "pointer" }}>Kontakte</span>
            </a>
          </div>
        </div>
      </div>

      <div
        style={{ width: "90%", height: "100%" }}
        className="nav-mobile d-flex justify-content-between align-items-center"
      >
        <div
          style={{ height: "100%" }}
          className="name d-flex align-items-center"
        >
          <span>Jakob Hörl</span>
        </div>
        <div className=" d-flex align-items-center justify-content-center">
          <div
            onClick={handleClick}
            className={`${click ? "stripes open" : "stripes"}`}
          >
            <span
              style={{ width: "40px", height: "2px", backgroundColor: "black" }}
            ></span>
            <span
              style={{ width: "40px", height: "2px", backgroundColor: "black" }}
            ></span>
            <span
              style={{ width: "40px", height: "2px", backgroundColor: "black" }}
            ></span>
          </div>
        </div>
        {click && (
          <div
            className={`border mobile-menu ${
              click ? "show" : "hide"
            } d-flex flex-column align-items-center justify-content-evenly`}
          >
            <a href="#about-me">
              <span
                onClick={handleClick}
                style={{ cursor: "pointer", fontSize: "20px" }}
              >
                Über Mich
              </span>
            </a>
            <a href="#projects">
              <span
                onClick={handleClick}
                style={{ cursor: "pointer", fontSize: "20px" }}
              >
                Projekte
              </span>
            </a>
            <a href="#certificates">
              <span
                onClick={handleClick}
                style={{ cursor: "pointer", fontSize: "20px" }}
              >
                Zertifikate
              </span>
            </a>
            <a href="#contacts">
              <span
                onClick={handleClick}
                style={{ cursor: "pointer", fontSize: "20px" }}
              >
                Kontakte
              </span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
