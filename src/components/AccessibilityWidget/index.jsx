import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const AccessibilityWidget = () => {
  return (
    <button type="button" className="acc-widget-button js-acc-widget-button">
      <StaticImage
        src="../../icons/accessibility.svg"
        alt="accessibility widget"
        width={48}
      />
    </button>
  );
};

export default AccessibilityWidget;
