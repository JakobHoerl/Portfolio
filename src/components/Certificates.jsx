import Project from "./Project";

const Certificates = ({ onClick }) => {
  return (
    <div
      style={{ marginTop: "250px" }}
      id="certificates"
      className="container-fluid"
    >
      <div className="title d-flex justify-content-center">
        <h2 style={{ marginBottom: "70px" }}>Meine Zertifikate</h2>
      </div>
      <div className="container-fluid">
        <div
          style={{ gap: "30px" }}
          className="row d-flex flex-row justify-content-center align-items-center"
        >
          <Project
            title="Javascript Algorithms and Data Structures"
            btnText="Ansehen"
            source="resources/JavaScript1.png"
            hideButton={true}
            onClick={onClick}
          />
          <Project
            title="Javascript Algorithms and Data Structures(Legacy)"
            btnText="Ansehen"
            hideButton={true}
            source="resources/JavaScript2.png"
            onClick={onClick}
          />
          <Project
            title="Responsive Web Design"
            btnText="Ansehen"
            hideButton={true}
            source="resources/Responsive Web-Design.png"
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Certificates;
