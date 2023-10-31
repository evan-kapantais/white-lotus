import React from "react";

import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import Icon from "../../icons/map-pin.svg";

import Layout from "../../components/Layout";
import HeadContent from "../../components/HeadContent";

const PropertiesPage = () => {
  return (
    <Layout>
      <section className="banner-section">
        <h2 className="section-heading page-heading">Properties</h2>
        <StaticImage
          src="../../images/general/general_0.jpg"
          alt="white lotus exterior"
          layout="fullWidth"
        />
      </section>
      <section className="quote-section">
        <p>
          Harnessing each property’s distinctive features in order to enhance
          their identity and bring the most out of scenery
        </p>
      </section>
      <section className="properties-section">
        <div className="property">
          <Link to="white-lotus">
            <div className="overlay">
              <h3 className="name">White Lotus Villa</h3>
              <p className="location">
                <Icon className="pin-icon" />
                <span>Triantaros, Tinos</span>
              </p>
            </div>
            <StaticImage
              src="../../images/properties/white_lotus/white_lotus_6.jpg"
              alt="white lotus residence"
            />
          </Link>
        </div>
        <div className="property">
          <Link to="brown-lotus">
            <div className="overlay">
              <h3 className="name">Brown Lotus</h3>
              <p className="location">
                <Icon className="pin-icon" />
                <span>Triantaros, Tinos</span>
              </p>
            </div>
            <StaticImage
              src="../../images/properties/brown_lotus/brown_lotus_5.jpg"
              alt="brown lotus residence"
            />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default PropertiesPage;

export const Head = () => <HeadContent title="Properties" />;
