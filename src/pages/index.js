import * as React from "react";
import '../stylesheets/index.scss';

import { StaticImage } from "gatsby-plugin-image";

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  height: '100%'
};

const IndexPage = () => {
  React.useEffect(() => {
    setTimeout(() => {
      document.body.classList.add('loaded');
    }, 200);
  }, []);

  return (
    <>
      <a href="https://www.dypa.gov.gr/" rel="nofollow" className="dypa-link">
        <StaticImage src="../images/dypa.jpg" aria-label="dypa logo" alt="dypa logo" class="dypa-logo" />
      </a>
      <header className="header">
        <div className="logo-container">
          <StaticImage src='../images/logo_white.png' aria-label="white lotus logo" alt='white lotus logo' class="logo" />
          <p>Timeless Elegance • Charming Hospitality</p>
        </div>
        <div className="tinos-container">
          <StaticImage src='../images/tinos.svg' aria-label="tinos outline image" alt='tinos outline' class="tinos" />
          <p>Tinos, Greece</p>
        </div>
      </header>
      <main style={pageStyles}>
        <StaticImage src='../images/laura-adai-Q0CpvfLpToQ-unsplash.jpg' alt='' class="background-image" />
        <div className="brand-container">
          <h1>White Lotus</h1>
          <p>Luxury Properties</p>
        </div>
        <p className="disclaimer">Our brand new website is under construction.<br />
          We will be with you shortly.</p>
      </main>
      <footer className="footer">
        <a href="mailto:whitelotuspropertymanagement@gmail.com" className="mail-link">whitelotuspropertymanagement@gmail.com</a>
      </footer>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
