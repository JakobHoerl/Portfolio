import React from "react";

const CodeButton = ({ cHref }) => {
  return (
    <div
      title="Zeige Code"
      className="d-flex justify-content-end align-items-center"
    >
      <a href={cHref} target="_blank" rel="noopener noreference">
        <button
          className="c-button"
          style={{
            cursor: "pointer",
            width: "30px",
            height: "30px",
            border: "1px solid black",
            borderRadius: "100%",
          }}
        >
          <p style={{ marginTop: "4px" }}>C</p>
        </button>
      </a>
    </div>
  );
};

export default CodeButton;
