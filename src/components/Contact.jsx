import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div
      id="contacts"
      style={{ height: "300px", marginTop: "100px" }}
      className="d-flex justify-content-center align-items-center flex-column"
    >
      <h2>Kontakt</h2>
      <div
        style={{ height: "100px", width: "400px", gap: "30px" }}
        className="window d-flex flex-row align-items-center justify-content-evenly"
      >
        <div
          style={{ marginTop: "5px", width: "100%" }}
          className="content d-flex flex-row justify-content-evenly align-items-center"
        >
          <a>
            <span>
              <MdEmail style={{ marginBottom: "3px", marginRight: "5px" }} />
            </span>
            hoerl-j@gmx.at
          </a>

          <a
            href="https://github.com/JakobHoerl"
            target="_blank"
            rel="noopener noreference"
            className="contact"
          >
            <span>
              <FaGithub style={{ marginBottom: "3px", marginRight: "5px" }} />
            </span>
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
