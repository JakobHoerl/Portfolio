import Projects from "./Projects";
import Certificates from "./Certificates";

const Skills = ({ onClick }) => {
  return (
    <div
      style={{ height: "auto", width: "100%" }}
      className=" container-fluid d-flex align-items-center justify-content-start flex-column"
    >
      <Projects />
      <Certificates onClick={onClick} />
    </div>
  );
};

export default Skills;
