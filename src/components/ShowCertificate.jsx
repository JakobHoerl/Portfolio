import { useEffect } from "react";

export default function ShowCertificate({ onClick, currentImg }) {
  useEffect(() => {
    const disableScroll = () => {
      document.body.style.overflow = "hidden";
    };

    const enableScroll = () => {
      document.body.style.overflow = "auto";
    };

    disableScroll();

    return () => {
      enableScroll();
    };
  }, []);
  return (
    <div className="overlay">
      <div className="box">
        <div className="img-box" style={{ height: "100%", width: "100%" }}>
          <img style={{ height: "100%", width: "100%" }} src={currentImg}></img>
        </div>
        <div className="return d-flex justify-content-center align-items-center">
          <button
            onClick={onClick}
            style={{ height: "40px", width: "200px", paddingTop: "8px" }}
            className="btn btn-dark costum-button"
          >
            Zurück
          </button>
        </div>
      </div>
    </div>
  );
}
