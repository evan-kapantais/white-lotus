import React from "react";

// Content Icons
import HighlightLinks from "../icons/accessibility_menu/highlight-links.svg";
import LetterSpacing from "../icons/accessibility_menu/letter-spacing.svg";
import LineHeight from "../icons/accessibility_menu/line-height.svg";
import FontWeight from "../icons/accessibility_menu/font-weight.svg";
import HighlightTitle from "../icons/accessibility_menu/highlight-title.svg";
import DyslexiaFont from "../icons/accessibility_menu/dyslexia-font.svg";

// Colour Icons
import DarkContrast from "../icons/accessibility_menu/dark-contrast.svg";
import LightContrast from "../icons/accessibility_menu/light-contrast.svg";
import HighContrast from "../icons/accessibility_menu/high-contrast.svg";
import HightSaturation from "../icons/accessibility_menu/high-saturation.svg";
import LowSaturation from "../icons/accessibility_menu/low-saturation.svg";
import Monochrome from "../icons/accessibility_menu/monochrome.svg";

// Tools Icons
import BigCursor from "../icons/accessibility_menu/big-cursor.svg";
import StopAnimations from "../icons/accessibility_menu/stop-animations.svg";

export const getAccessibilityIcon = (action) => {
  let iconComponent = null;

  switch (action) {
    // Content
    case "highlight-links":
      iconComponent = <HighlightLinks />;
      break;
    case "letter-spacing":
      iconComponent = <LetterSpacing />;
      break;
    case "line-height":
      iconComponent = <LineHeight />;
      break;
    case "font-weight":
      iconComponent = <FontWeight />;
      break;
    case "highlight-title":
      iconComponent = <HighlightTitle />;
      break;
    case "dyslexia-font":
      iconComponent = <DyslexiaFont />;
      break;

    // Colour
    case "dark-contrast":
      iconComponent = <DarkContrast />;
      break;
    case "light-contrast":
      iconComponent = <LightContrast />;
      break;
    case "high-contrast":
      iconComponent = <HighContrast />;
      break;
    case "high-saturation":
      iconComponent = <HightSaturation />;
      break;
    case "low-saturation":
      iconComponent = <LowSaturation />;
      break;
    case "monochrome":
      iconComponent = <Monochrome />;
      break;

    // Tools
    case "big-cursor":
      iconComponent = <BigCursor />;
      break;
    case "stop-animations":
    default:
      iconComponent = <StopAnimations />;
      break;
  }

  return iconComponent;
};
