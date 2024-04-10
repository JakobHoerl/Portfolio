const Button = ({ text, width, height, href, children }) => {
  return (
    <a href={href} download target="_blank" rel="noopener noreference">
      <button
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
