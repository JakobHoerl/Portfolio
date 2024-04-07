import Project from "./Project";

const Certificates = () => {
  return (
    <div style={{ marginTop: "250px" }} id="certificates">
      <div className="title d-flex justify-content-center">
        <h2 style={{ marginBottom: "70px" }}>Meine Zertifikate</h2>
      </div>
      <div className="container-fluid">
        <div className="row">
          <Project
            title="Javascript Algorithms and Data Structures(Legacy)"
            btnText="View"
            source="resources/JavaScript1.png"
            hideButton={true}
            href="https://www.freecodecamp.org/certification/JakobHoerl/javascript-algorithms-and-data-structures-v8"
          />
          <Project
            title="Javascript Algorithms and Data Structures"
            btnText="View"
            hideButton={true}
            source="resources/JavaScript2.png"
            href="https://www.freecodecamp.org/certification/JakobHoerl/javascript-algorithms-and-data-structures"
          />
          <Project
            title="Responsive Web-Design"
            btnText="View"
            hideButton={true}
            source="./resources/Responsive Web-Design.png"
            href="https://www.freecodecamp.org/certification/JakobHoerl/responsive-web-design"
          />
        </div>
      </div>
    </div>
  );
};

export default Certificates;
