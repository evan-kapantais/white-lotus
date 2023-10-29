import React, { useState, useRef, useEffect } from "react";

import { StaticImage } from "gatsby-plugin-image";

import Layout from "../../components/Layout";

import Arrow from "../../icons/arrow.svg";
import ArrowRight from "../../icons/arrow.svg";
import Check from "../../icons/check.svg";

import Carousel from "../../utils/carousel";

import data from "../../data/amenities.json";

const WhiteLotusPage = () => {
  const [loaded, setLoaded] = useState(false);
  const carouselRef = useRef(null);
  const { details, amenities } = data.white_lotus;

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) new Carousel(carouselRef.current);
  }, [loaded]);

  return (
    <Layout id="white-lotus" className="property-page">
      <section className="banner-section">
        <h2 className="section-heading page-heading">
          The White Lotus Villa Experience
        </h2>
        <p className="page-tagline">touch the sky</p>
        <StaticImage
          src="../../images/properties/white_lotus/white_lotus_2.jpg"
          alt="white lotus wallpaper"
          layout="fullWidth"
        />
      </section>
      <section className="quote-section">
        <p>
          Built in 1949, the White Lotus represents the Dove. It offers serenity
          within the iconic Tinian element and combines the simplicity of the
          island&lsquo;s characteristic interior design with contemporary
          comfort.
        </p>
      </section>
      <section className="gallery-section">
        <div className="carousel" ref={carouselRef}>
          <button
            type="button"
            className="carousel-button prev-button js-prev-button hidden"
          >
            <Arrow />
          </button>
          <button
            type="button"
            className="carousel-button next-button js-next-button"
          >
            <ArrowRight />
          </button>
          <ul className="carousel-list js-carousel-list">
            <li className="carousel-list-item js-carousel-list-item">
              <StaticImage
                src={`../../images/properties/white_lotus/white_lotus_0.jpg`}
                alt="white lotus gallery image"
              />
            </li>
            <li className="carousel-list-item js-carousel-list-item">
              <StaticImage
                src={`../../images/properties/white_lotus/white_lotus_1.jpg`}
                alt="white lotus gallery image"
              />
            </li>
            <li className="carousel-list-item js-carousel-list-item">
              <StaticImage
                src={`../../images/properties/white_lotus/white_lotus_2.jpg`}
                alt="white lotus gallery image"
              />
            </li>
            <li className="carousel-list-item js-carousel-list-item">
              <StaticImage
                src={`../../images/properties/white_lotus/white_lotus_3.jpg`}
                alt="white lotus gallery image"
              />
            </li>
            <li className="carousel-list-item js-carousel-list-item">
              <StaticImage
                src={`../../images/properties/white_lotus/white_lotus_4.jpg`}
                alt="white lotus gallery image"
              />
            </li>
            <li className="carousel-list-item js-carousel-list-item">
              <StaticImage
                src={`../../images/properties/white_lotus/white_lotus_5.jpg`}
                alt="white lotus gallery image"
                height={600}
              />
            </li>
          </ul>
        </div>
      </section>
      <section className="amenities-section">
        <div className="details">
          <h2 className="section-heading">Property Details</h2>
          <div className="lists-wrapper">
            <ul className="amenities-list">
              {details
                .slice(0, details.length / 2 + (details.length % 2))
                .map((entry, i) => (
                  <li key={i} className="amenities-list-item">
                    <Check className="check-icon" />
                    {entry}
                  </li>
                ))}
            </ul>
            <ul className="amenities-list">
              {details
                .slice(details.length / 2 + (details.length % 2))
                .map((entry, i) => (
                  <li key={i} className="amenities-list-item">
                    <Check className="check-icon" />
                    {entry}
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="amenities">
          <h2 className="section-heading">Amenities</h2>
          <div className="lists-wrapper">
            <ul className="amenities-list">
              {amenities
                .slice(0, amenities.length / 2 + (amenities.length % 2))
                .map((entry, i) => (
                  <li key={i} className="amenities-list-item">
                    <Check className="check-icon" />
                    {entry}
                  </li>
                ))}
            </ul>
            <ul className="amenities-list">
              {amenities
                .slice(amenities.length / 2 + (amenities.length % 2))
                .map((entry, i) => (
                  <li key={i} className="amenities-list-item">
                    <Check className="check-icon" />
                    {entry}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.888635740334!2d25.194237577386282!3d37.55768747204097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a2ebe46336158d%3A0x3fb4011a0cd688ce!2sWhite%20Lotus%20Villa!5e0!3m2!1sen!2sgr!4v1698581482918!5m2!1sen!2sgr"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="White Lotus location"
        ></iframe>
      </section>
    </Layout>
  );
};

export default WhiteLotusPage;

export const Head = () => <title>White Lotus Villa</title>;
