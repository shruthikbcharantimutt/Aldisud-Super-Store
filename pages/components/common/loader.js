import React from "react";

const Loader = () => (
  <div
    className="loader-container"
    style={{
      height: "100vh",
      "justify-content": "center",
      display: "flex",
      "align-items": "center",
    }}
  >
    <div className="loader">
      {" "}
      <img src="/loader.gif" height={100} width={100} alt="Example GIF" />
    </div>
  </div>
);

export default Loader;
