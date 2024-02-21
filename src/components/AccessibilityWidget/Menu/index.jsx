import React from "react";
import { optionGroups } from "./options";
import { StaticImage } from "gatsby-plugin-image";
import { getAccessibilityIcon } from "../../../helpers/icon_helpers";
import FontAdjustment from "./FontAdjustment";

const Menu = () => {
  const formatOptionName = (name) => name.replace("-", " ");

  return (
    <div className={`acc-menu js-acc-menu`}>
      <header className="acc-menu-header">
        <h2>Accessibility Menu</h2>
        <div>
          <button type="button" className="reset-button js-reset-button">
            <StaticImage src="../../../icons/refresh.svg" alt="refresh" />
          </button>
          <button type="button" className="close-button js-close-button">
            <StaticImage src="../../../icons/close.svg" alt="close" />
          </button>
        </div>
      </header>

      <div className="acc-menu-content">
        {optionGroups.map((group) => (
          <section
            key={group.name}
            className={`acc-menu-section acc-menu-section-${group.name}`}
            data-group-name={group.name}
          >
            <h3 className="section-title">{group.name}</h3>
            <ul className="options-list">
              {group.name === "content" && <FontAdjustment />}
              {group.options.map((option) => (
                <li key={option.name} className="option">
                  <button
                    type="button"
                    className={`acc-action-button js-acc-action-button ${
                      option.extraClass || ""
                    }`}
                    data-adds-body-class={option.addsBodyClass}
                    data-adds-html-class={option.addsHtmlClass}
                    data-action={option.name}
                  >
                    {getAccessibilityIcon(option.name)}
                    <span className="option-text">
                      {formatOptionName(option.name)}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Menu;
