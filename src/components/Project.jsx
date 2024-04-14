import Button from "./Button";
import CodeButton from "./CodeButton";
const Project = ({
  title,
  source,
  href,
  btnText,
  cHref,
  children,
  hideButton,
}) => {
  return (
    <div className="col d-flex justify-content-center mb-5">
      <div
        style={{
          padding: "20px",
          height: "400px",
          width: "400px",
        }}
        className="window d-flex  flex-column"
      >
        <a href={href} target="_blank" rel="noopener noreference">
          <div
            style={{ height: "50px", width: "100%", cursor: "pointer" }}
            className="d-flex align-items-center justify-content-center"
          >
            <h4 style={{ textAlign: "center", alignItems: "center" }}>
              {title}
            </h4>
          </div>
        </a>
        {hideButton || <CodeButton cHref={cHref} />}

        <div
          style={{ height: "80%" }}
          className="d-flex align-items-center justify-content-center flex-column"
        >
          <a href={href} target="_blank" rel="noopener noreference">
            <div className=" container-img mb-1 d-flex justify-content-center">
              <img
                style={{
                  height: "100px",
                  width: "200px",
                  border: "1px solid black",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
                src={source}
                alt={title}
              />
            </div>
          </a>
          <Button text={btnText} width="200px" height="40px" href={href} />
          <div style={{ marginTop: "20px" }}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Project;
