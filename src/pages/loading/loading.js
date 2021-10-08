import React from "react";
import "./loading.css";

function Loading() {
  return (
    <div className="loading-position">
      <div
        className="swapping-squares-spinner"
      >
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
      </div>
    </div>
  );
}

export default Loading;
