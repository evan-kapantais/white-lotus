import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Burger from "./Burger";

const Header = () => {
  return (
    <header id="site-header" className="site-header js-site-header">
      <h1 className="header-brand">
        <Link to="/">White Lotus</Link>
      </h1>
      <Link to="/" className="logo-link">
        <StaticImage
          src="../../images/logo_blue.png"
          aria-label="white lotus logo"
          alt="white lotus logo"
          class="logo"
        />
      </Link>
      <Burger />
    </header>
  );
};

export default Header;
