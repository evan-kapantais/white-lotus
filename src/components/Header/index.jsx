import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Burger from "./Burger";

const Header = () => {
  return (
    <header id="site-header" className="site-header js-site-header">
      <div className="header-top">
        <StaticImage
          src="../../images/dypa.jpg"
          aria-label="dypa logo"
          alt="dypa logo"
          class="dypa-logo"
        />
        <p>Co-funded by Greece and the European Union</p>
        <div>
          <StaticImage
            src="../../images/espa.png"
            aria-label="espa 2014 - 2022"
            alt="espa 2014 - 2022"
            width={60}
            class="programme-image"
          />
          <StaticImage
            src="../../images/eu.png"
            aria-label="european union"
            alt="european union"
            width={60}
            class="programme-image"
          />
        </div>
      </div>
      <div className="header-bottom">
        <Link to="/" className="text-link">
          <h1>White Lotus</h1>
        </Link>
        <Link to="/" className="logo-link">
          <StaticImage
            src="../../images/logo_blue.png"
            aria-label="white lotus logo"
            alt="white lotus logo"
            className="logo"
          />
        </Link>
        <nav className="site-menu">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/properties">Properties</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
        <Burger />
      </div>
    </header>
  );
};

export default Header;
