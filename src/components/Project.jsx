import Button from "./Button";
import CodeButton from "./CodeButton";
const Project = ({
  title,
  source,
  href = null,
  btnText,
  cHref,
  children,
  hideButton,
  onClick = null,
}) => {
  return (
    <div className="col-12 col-md-10 col-lg-4 d-flex justify-content-center align-items-center mb-5">
      <div
        style={{
          padding: "20px",
          height: "400px",
          width: "400px",
        }}
        className="window d-flex flex-column"
      >
        <a href={href} target="_blank" rel="noopener noreference">
          <div
            style={{ height: "50px", width: "100%", cursor: "pointer" }}
            className="d-flex align-items-center justify-content-center"
            onClick={() => onClick(source)}
          >
            <h4
              style={{
                textAlign: "center",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
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
            <div
              onClick={() => onClick(source)}
              className=" container-img mb-1 d-flex justify-content-center"
            >
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
          <Button
            onClick={onClick}
            source={source}
            text={btnText}
            width="200px"
            height="40px"
            href={href}
          />
          <div style={{ marginTop: "20px" }}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Project;
