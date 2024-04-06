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
    <div className="col-12 col-md-4 d-flex justify-content-center mb-5">
      <div
        style={{
          padding: "20px",
          height: "400px",
          width: "350px",
        }}
        className="window d-flex  flex-column"
      >
        <div
          style={{ height: "50px", width: "100%" }}
          className="d-flex align-items-center justify-content-center"
        >
          <h4 style={{ textAlign: "center", alignItems: "center" }}>{title}</h4>
        </div>
        {hideButton || <CodeButton cHref={cHref} />}

        <div
          style={{ height: "80%" }}
          className="d-flex align-items-center justify-content-center flex-column"
        >
          <div className=" container-img mb-1 d-flex justify-content-center">
            <img
              style={{
                height: "100px",
                width: "200px",
                border: "1px solid black",
                borderRadius: "5px",
              }}
              src={source}
              alt={title}
            />
          </div>
          <Button text={btnText} width="200px" height="40px" href={href} />
          <div style={{ marginTop: "20px" }}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Project;
