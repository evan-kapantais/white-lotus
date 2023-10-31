import React from "react";

import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Icon from "../../icons/close.svg";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Properties", path: "/properties" },
  { name: "Contact", path: "/contact" },
];

const MenuModal = () => {
  return (
    <div className="menu js-menu">
      <button
        type="button"
        aria-label="menu close button"
        className="close-button js-close-button"
      >
        <Icon />
      </button>
      <StaticImage
        src="../../images/logo_blue.png"
        alt="white lotus logo"
        className="logo"
      />
      <ul className="menu-list">
        {menuItems.map((me, i) => (
          <li key={i}>
            <Link to={me.path} className="menu-link">
              {me.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuModal;
