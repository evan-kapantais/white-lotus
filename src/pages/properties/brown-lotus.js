import React, { useState, useRef, useEffect } from "react";

import { StaticImage } from "gatsby-plugin-image";

import Layout from "../../components/Layout";

import Arrow from "../../icons/arrow.svg";
import ArrowRight from "../../icons/arrow.svg";
import Check from "../../icons/check.svg";

import Carousel from "../../utils/carousel";

import data from "../../data/amenities.json";

const BrownLotusPage = () => {
  const [loaded, setLoaded] = useState(false);
  const carouselRef = useRef(null);
  const { details, amenities } = data.brown_lotus;

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) new Carousel(carouselRef.current);
  }, [loaded]);

  return (
    <Layout id="brown-lotus" className="property-page">
      <section className="banner-section">
        <h2 className="section-heading page-heading">The Brown Lotus</h2>
        <p className="page-tagline">where mountain and sea become one</p>
        <StaticImage
          src="../../images/properties/brown_lotus/brown_lotus_2.jpg"
          alt="brown lotus property image"
          height={900}
          objectFit="contain"
        />
      </section>
      <section className="quote-section">
        <p>
          Built in 1947 The Brown Lotus symbolises Xerolithia (dry stone), a
          rocklike sand element formed with &lsquo;sparkly dust&lsquo;. Hard and
          wild but at the same time easy to smite. Shaped by time and wind, this
          local element represents the wild beauty of the Tinian landscape.
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
                src={`../../images/properties/brown_lotus/brown_lotus_0.jpg`}
                alt="brown lotus property image"
                height={900}
                objectFit="contain"
              />
            </li>
            <li className="carousel-list-item js-carousel-list-item">
              <StaticImage
                src={`../../images/properties/brown_lotus/brown_lotus_1.jpg`}
                alt="brown lotus property image"
                height={900}
                objectFit="contain"
              />
            </li>
            <li className="carousel-list-item js-carousel-list-item">
              <StaticImage
                src={`../../images/properties/brown_lotus/brown_lotus_2.jpg`}
                alt="brown lotus property image"
                height={900}
                objectFit="contain"
              />
            </li>
            <li className="carousel-list-item js-carousel-list-item">
              <StaticImage
                src={`../../images/properties/brown_lotus/brown_lotus_3.jpg`}
                alt="brown lotus property image"
                height={900}
                objectFit="contain"
              />
            </li>
            <li className="carousel-list-item js-carousel-list-item">
              <StaticImage
                src={`../../images/properties/brown_lotus/brown_lotus_4.jpg`}
                alt="brown lotus property image"
                height={900}
                objectFit="contain"
              />
            </li>
            <li className="carousel-list-item js-carousel-list-item">
              <StaticImage
                src={`../../images/properties/brown_lotus/brown_lotus_5.jpg`}
                alt="brown lotus property image"
                height={900}
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.903195000419!2d25.19423237738625!3d37.557344472041066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a2eb047ac683c3%3A0x736579cabc7590bf!2sThe%20Brown%20Lotus%20Tinos!5e0!3m2!1sen!2sgr!4v1698581760470!5m2!1sen!2sgr"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Brown Lotus location"
        ></iframe>
      </section>
    </Layout>
  );
};

export default BrownLotusPage;

export const Head = () => <title>White Lotus Villa</title>;
