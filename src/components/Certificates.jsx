import Project from "./Project";

const Certificates = ({ onClick }) => {
  return (
    <div
      style={{ marginTop: "250px" }}
      id="certificates"
      className="container-fluid d-flex align-items-center justify-content-center flex-column "
    >
      <div className="title d-flex justify-content-center">
        <h2 style={{ marginBottom: "70px" }}>Meine Zertifikate</h2>
      </div>

      <div className="row d-flex justify-content-center">
        <div className=" mb-4 col d-flex justify-content-center align-items-center">
          <Project
            title="React, Redux & More "
            btnText="Ansehen"
            source="resources/React.png"
            hideButton={true}
            onClick={onClick}
          />
        </div>
        <div className=" mb-4 col d-flex justify-content-center align-items-center">
          <Project
            title="Javascript Algorithms and Data Structures"
            btnText="Ansehen"
            source="resources/JavaScript1.png"
            hideButton={true}
            onClick={onClick}
          />
        </div>
      </div>
      <div className="row ">
        <div className="mb-4 col d-flex justify-content-center align-items-center">
          <Project
            title="Javascript Algorithms and Data Structures(Legacy)"
            btnText="Ansehen"
            hideButton={true}
            source="resources/JavaScript2.png"
            onClick={onClick}
          />
        </div>
        <div className="mb-4 col d-flex justify-content-center align-items-center">
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
