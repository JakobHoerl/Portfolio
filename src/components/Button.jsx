const Button = ({
  text,
  width,
  height,
  download,
  href,
  children,
  onClick = null,
  source,
}) => {
  return (
    <a
      href={href}
      download={download}
      target="_blank"
      rel="noopener noreference"
    >
      <button
        onClick={() => onClick(source)}
        style={{
          fontSize: "18px",
          width: width,
          paddingBottom: "1px",
          height: height,
        }}
        className={`btn btn-dark costum-button`}
      >
        {text}
        <span style={{ marginLeft: "10px" }}>{children}</span>
      </button>
    </a>
  );
};

export default Button;
