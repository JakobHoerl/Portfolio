import Project from "./Project";

const Certificates = () => {
  return (
    <div
      style={{ marginTop: "250px" }}
      id="certificates"
      className="container-fluid"
    >
      <div className="title d-flex justify-content-center">
        <h2 style={{ marginBottom: "70px" }}>Meine Zertifikate</h2>
      </div>
      <div className="container">
        <div
          style={{ gap: "70px" }}
          className="row d-flex flex-row justify-content-center align-items-center"
        >
          <Project
            title="Javascript Algorithms and Data Structures"
            btnText="Ansehen"
            source="resources/JavaScript1.png"
            hideButton={true}
            href="https://www.freecodecamp.org/certification/JakobHoerl/javascript-algorithms-and-data-structures-v8"
          />
          <Project
            title="Javascript Algorithms and Data Structures(Legacy)"
            btnText="Ansehen"
            hideButton={true}
            source="resources/JavaScript2.png"
            href="https://www.freecodecamp.org/certification/JakobHoerl/javascript-algorithms-and-data-structures"
          />
        </div>
      </div>
    </div>
  );
};

export default Certificates;
