import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import Layout from "../components/Layout";
import Reviews from "../components/Reviews";

import Icon from "../icons/arrow.svg";
import HeadContent from "../components/HeadContent";

const IndexPage = () => {
  return (
    <Layout>
      <section className="banner-section">
        <StaticImage
          src="../images/properties/white_lotus/white_lotus_2.jpg"
          alt="white lotus exterior image"
          loading="eager"
          layout="fullWidth"
        />
      </section>
      <section className="quote-section">
        <div className="quote-wrapper">
          <p>
            Experience the odyssey of elevated living with White Lotus. <br />
            Where Cycladic serenity meets unique property management.
          </p>
        </div>
        <StaticImage
          src="../images/general/general_0.jpg"
          alt="white lotus exterior view"
          className="image-wrapper exterior-image"
          layout="fullWidth"
        />
        <StaticImage
          src="../images/properties/brown_lotus/brown_lotus_8.jpg"
          alt="brown lotus bathroom view"
          className="image-wrapper bathroom-image"
          layout="fullWidth"
        />
      </section>
      <section className="about-section">
        <div className="details">
          <h2 className="section-heading">About Us</h2>
          <p>
            White Lotus is a property management company established in 2022
            that specialises in property management in the tactical locations of
            Athens, Tinos and Arachova.
          </p>
          <p>
            Providing a holistic package from hosting services and OTA
            channelling (AirBnb, Booking, Vrbo, Agoda), to property management.
            Using top notch technology, White Lotus seeks to provide  elevated
            services to its clientele.
          </p>
        </div>
        <div className="image-wrapper">
          <StaticImage
            src="../images/general/acropolis.jpg"
            alt="side view of the Parthenon"
          />
        </div>
      </section>
      <section className="properties-section">
        <div className="details">
          <h2 className="section-heading">Our Properties</h2>
          <p>
            Adding modern touches to the Tinian traditional architecture and
            exploiting the surrounding space to blend the past with the needs of
            the present, each one of our handpicked properties offers an
            unparalleled travel experience.
          </p>
          <Link to="/properties" className="page-link">
            explore our properties
            <Icon />
          </Link>
        </div>
        <div className="gallery">
          <StaticImage
            src="../images/properties/white_lotus/white_lotus_1.jpg"
            alt="white lotus interior"
            layout="fullWidth"
          />
          <StaticImage
            src="../images/properties/white_lotus/white_lotus_2.jpg"
            alt="white lotus interior"
            layout="fullWidth"
          />
          <StaticImage
            src="../images/properties/white_lotus/white_lotus_3.jpg"
            alt="white lotus interior"
            layout="fullWidth"
          />
          <StaticImage
            src="../images/properties/white_lotus/white_lotus_4.jpg"
            alt="white lotus interior"
            layout="fullWidth"
          />
          <StaticImage
            src="../images/properties/white_lotus/white_lotus_5.jpg"
            alt="white lotus interior"
            layout="fullWidth"
          />
        </div>
      </section>
      <section className="deco-image-section">
        <StaticImage
          src="../images/general/beach.jpg"
          alt="beach with straw umbrellas"
          layout="fullWidth"
        />
      </section>
      <section className="reviews-section">
        <div className="text-wrapper">
          <p>
            Whether you seek astonishing views or cosy and lean spaces, White
            Lotus delivers the best value to both owners and guests
          </p>
        </div>
        <div className="reviews-wrapper">
          <Reviews />
        </div>
      </section>
      <section className="contact-section">
        <div className="details">
          <h2 className="section-heading">Need more details?</h2>
          <p>
            Don't hesitate to reach us through email at <br />
            <a
              href="mailto:whitelotuspropertymanagement@gmail.com"
              className="mail-link"
            >
              <strong>whitelotuspropertymanagement@gmail.com</strong>
            </a>
          </p>
          <Link to="/contact" className="page-link">
            contact page
            <Icon />
          </Link>
        </div>
        <div className="image-wrapper">
          <StaticImage
            src="../images/general/church.jpg"
            alt="a church on a Greek island"
          />
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <HeadContent title="White Lotus" />;
