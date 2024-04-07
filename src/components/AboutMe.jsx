import Button from "./Button";
import { MdOutlineFileDownload } from "react-icons/md";
const AboutMe = () => {
  return (
    <div
      style={{ height: "650px" }}
      id="about-me"
      className=" container-fluid d-flex align-items-center justify-content-center"
    >
      <div className="flex-lg-row flex-md-row flex-column d-flex align-items-center justify-content-center w-100">
        <div className="container-img mb-3">
          <img
            style={{
              borderRadius: "20%",
              height: "260px",
              width: "200px",
              border: "1px solid black",
            }}
            src="resources/Profilbild.jpeg"
            alt="Profilbild"
          />
        </div>
        <div className="text d-flex align-items-start justify-content-center flex-column ">
          <h5 style={{ fontWeight: "bold" }}>Hallo, ich bin der Jakob.</h5>
          <p style={{ marginTop: "10px", fontSize: "15px" }}>
            Ende 2023 habe ich begonnen, mich aktiv in die Front-End-Entwicklung
            einzuarbeiten und konnte mich mit diversen Kursen und eigene
            Projekten weiterentwickeln. Mittlerweile gehört zu meinem Web-Stack:{" "}
            <strong>HTML</strong>, <strong>CSS</strong>,{" "}
            <strong>JavaScript</strong>, <strong>React</strong> und{" "}
            <strong>Bootstrap</strong>.
          </p>
          <Button text="Lebenslauf" width="300px" height="40px">
            <MdOutlineFileDownload />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
