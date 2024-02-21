import React from "react";

const FontAdjustment = () => (
  <div className="font-adjustment-wrapper">
    <div className="title-wrapper">
      <span className="icon"></span>
      <h4>Adjust Font Size</h4>
    </div>
    <div className="controls-wrapper">
      <button
        type="button"
        className="font-adjustment-button js-font-adjust-button"
        data-smaller
      >
        -
      </button>
      <p className="js-font-size font-size">100%</p>
      <button
        type="button"
        className="font-adjustment-button js-font-adjust-button"
      >
        +
      </button>
    </div>
  </div>
);

export default FontAdjustment;
