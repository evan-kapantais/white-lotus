import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <p>&copy; White Lotus Property Management, {year}</p>
      <a
        href="mailto:whitelotuspropertymanagement@gmail.com"
        className="mail-link"
      >
        whitelotuspropertymanagement@gmail.com
      </a>
    </footer>
  );
};

export default Footer;
