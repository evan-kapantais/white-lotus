import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Burger from "./Burger";

const Header = () => {
  return (
    <header id="site-header" className="site-header js-site-header">
      <StaticImage
        src="../../images/dypa.jpg"
        aria-label="dypa logo"
        alt="dypa logo"
        class="dypa-logo"
      />
      <Link to="/" className="logo-link">
        <StaticImage
          src="../../images/logo_blue.png"
          aria-label="white lotus logo"
          alt="white lotus logo"
          class="logo"
        />
        <h1>White Lotus</h1>
      </Link>
      <Burger />
    </header>
  );
};

export default Header;
