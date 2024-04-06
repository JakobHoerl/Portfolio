import Project from "./Project";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import Button from "./Button";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <>
      <div className="container-fluid d-flex flex-column">
        <h2
          className="d-flex justify-content-center"
          id="projects"
          style={{ marginBottom: "50px" }}
        >
          Meine Projekte
        </h2>
        <div className="container">
          <div
            style={{ gap: "70px", marginTop: "20px" }}
            className="row d-flex flex-row justify-content-center align-items-center"
          >
            <Project
              title="MovieWatchlist"
              source="./resources/MovieWatchlist.png"
              href="https://jakobhoerl.github.io/MovieWatchList-React/"
              cHref="https://codesandbox.io/p/github/JakobHoerl/Movie-Watchlist-react/main?file=%2Fsrc%2FMain%20Project%2FNavbar.js&import=true&workspaceId=5b60e0c2-b637-4466-bd0c-f3ecf44e6b0f"
              btnText="View"
            >
              <FaHtml5 title="HTML5" color="#e34c26" size={32} />
              <FaCss3Alt title="CSS" color="#264de4" size={32} />
              <TbBrandJavascript title="JavaScript" color="yellow" size={32} />
              <FaReact title="React" color="#61DBFB" size={32} />
            </Project>
            <Project
              title="Cash Register"
              source="./resources/CashRegister.png"
              href="https://jakobhoerl.github.io/CashRegister/"
              btnText="View"
              cHref="https://codesandbox.io/p/github/JakobHoerl/CashRegister/main?file=%2Findex.html%3A14%2C15&import=true&workspaceId=5b60e0c2-b637-4466-bd0c-f3ecf44e6b0f"
            >
              <FaHtml5 title="HTML5" color="#e34c26" size={32} />
              <FaCss3Alt title="CSS" color="#264de4" size={32} />
              <TbBrandJavascript title="JavaScript" color="yellow" size={32} />
            </Project>
          </div>
          <div
            style={{ marginTop: "60px" }}
            className=" button-container d-flex justify-content-center"
          >
            <Button
              href="https://github.com/JakobHoerl?tab=repositories"
              text="Entdecken Sie weitere meiner Projekte auf GitHub"
              width="300px"
              height="80px"
            >
              <FaGithub size={25} style={{ marginBottom: "2px" }} />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
