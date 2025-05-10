import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import { FaWhatsapp, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import "../styles/styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ImageCarousel from "../components/images";
import Form from "../components/form";
import AccordionFlush from "../components/accordion";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // animation duration
      easing: "ease-in-out", // easing function
      once: true, // whether animation should happen only once
    });
  }, []);

  return (
    <div>
      <Helmet>
        <title>
          Extensive Academy | Premier Private School in Simawa Serving Lagos &
          Ogun
        </title>
        <meta
          name="description"
          content="Extensive Academy is a top private school in Simawa, serving families in Lagos, Sagamu, Ogijo, and across Ogun State seeking affordable, quality education outside the city."
        />
        <link rel="canonical" href="https://extensive-academy.vercel.app/" />

        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "School",
        "name": "Extensive Academy",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Plot 15, Jesus Avenue",
          "addressLocality": "Simawa",
          "addressRegion": "Ogun",
          "postalCode": "Your Postal Code",
          "addressCountry": "NG"
        },
        "telephone": "+2347039404364",
        "url": "https://extensive-academy.vercel.app/",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "20"
        }
      }
    `}
        </script>
      </Helmet>

      <Navbar />

      <section
        className="hero pt-5 pb-5"
        data-aos="fade-up"
        data-aos-duration="1000">
        <div className="container">
          <h1
            data-aos="fade"
            data-aos-easing="ease-in-out"
            data-aos-delay="500"
            data-aos-duration="1000">
            Welcome to Extensive Academy
          </h1>
          <h2
            data-aos="fade"
            data-aos-easing="ease-in-out"
            data-aos-delay="1000"
            data-aos-duration="1000">
            Empower Learners to Aspire and Acquire Academic Excellence
          </h2>
          <Link
            to="/enroll"
            className="btn btn-info text-white fw-bold px-4 me-4"
            data-aos="fade"
            data-aos-easing="ease-in-out"
            data-aos-delay="1000"
            data-aos-duration="1000">
            Enroll Now!
          </Link>
        </div>
      </section>

      <section
        className="about-us pt-5 pb-4"
        data-aos="fade"
        data-aos-easing="ease-in-out"
        data-aos-delay="500"
        data-aos-duration="1000">
        <div className="container">
          <div className="row">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
                <img src="" alt="image-of-director-&-Proprietress" />
              </div>
              <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
                <h6 className="mt-4">Welcome to extensive Academy</h6>
                <p>
                  Extensive Academy is a top-tier private school located in
                  Simawa, near Sagamu and Ogijo, serving families across Ogun
                  State and Lagos. Whether you're a parent working in Lagos or
                  living in nearby towns like Redeemed Camp, Mowe, or Arepo,
                  Extensive Academy offers a convenient, affordable, and
                  excellent academic environment for your child — without the
                  stress of daily travel to the city. <br />
                  <br /> Our commitment to academic excellence, character
                  development, and community-focused learning makes us one of
                  the best choices for education in Simawa and the surrounding
                  areas.
                </p>
                <h6>Our Mission</h6>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Corporis voluptate ab maiores iste facilis culpa mollitia
                  reprehenderit sapiente quam magni. Eos aliquid dolore atque
                  distinctio.
                </p>
                <h6 className="mt-4">Our Vission</h6>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Consequatur nostrum et aliquid architecto sunt non inventore
                  dignissimos, ullam veniam praesentium eaque quaerat animi.
                  Laborum, expedita?
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center align-items-center">
            {/* Text Content */}
            <div
              className="col-lg-6 col-md-12 mb-4 mb-lg-0"
              data-aos="fade"
              data-aos-easing="ease-in-out"
              data-aos-delay="500"
              data-aos-duration="1000">
              <h5>Enroll Your Wards With Us</h5>
              <p className="mt-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
                eos facilis maiores qui, ea sequi. Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Repellendus, architecto.
              </p>
              <Link
                to="/enroll"
                className="btn btn-info text-white fw-bold px-4 me-4"
                data-aos="fade"
                data-aos-easing="ease-in-out"
                data-aos-duration="1000">
                Enroll Now!
              </Link>
            </div>

            {/* Video */}
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade"
              data-aos-easing="ease-in-out"
              data-aos-delay="200"
              data-aos-duration="800">
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/xxxxxxxxxx" // Replace with your actual video ID
                  title="YouTube video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="events pt-5 pb-5"
        data-aos="fade"
        data-aos-easing="ease-in-out"
        data-aos-delay="100"
        data-aos-duration="800">
        <div className="container">
          <h4>Our Events</h4>
          <div className="row justify-content-center align-items-center event-item ">
            <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
              <h6>Cultural Day</h6>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Inventore excepturi dignissimos accusamus? Alias inventore ipsam
                culpa sunt suscipit, commodi unde dolore reiciendis excepturi
                odit saepe.
              </p>
            </div>
            <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 d-flex justify-content-center align-items-center images">
              <div
                id="carouselExampleSlidesOnly"
                className="carousel slide"
                data-bs-ride="carousel">
                <div className="carousel-inner">
                  <ImageCarousel />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="staff mb-5"
        data-aos="fade"
        data-aos-easing="ease-in-out"
        data-aos-delay="100"
        data-aos-duration="800">
        <div className="container">
          <h4>Meet with the Team</h4>
          <div className="row row-cols-2 row-cols-md-2 row-cols-lg-4 g-4 justify-content-center">
            <div className="col">
              <div className="card h-100 shadow-sm">
                <img src="/" className="card-img-top" alt="image-of-director" />
                <div className="card-body">
                  <h3 className="card-title mb-3">
                    Director, Extensive Academy | Eng. Agbi
                  </h3>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 shadow-sm">
                <img
                  src="/"
                  className="card-img-top"
                  alt="image-of-proprietress"
                />
                <div className="card-body">
                  <h3 className="card-title mb-3">
                    Proprietress, Extensive Academy | Mrs Ibukun Agbi
                  </h3>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 shadow-sm">
                <img
                  src="/"
                  className="card-img-top"
                  alt="image-of-teaching-staff"
                />
                <div className="card-body">
                  <h3 className="card-title mb-3">Teaching Staff</h3>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 shadow-sm">
                <img
                  src="/"
                  className="card-img-top"
                  alt="image-of-non-teaching-staff"
                />
                <div className="card-body">
                  <h3 className="card-title mb-3">Non-teaching Staff</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AccordionFlush />

      <section className="contact mt-5 mb-5">
        <div className="container">
          <div
            className="d-flex justify-content-center align-items-center socials"
            data-aos="fade"
            data-aos-easing="ease-in-out"
            data-aos-delay="100"
            data-aos-duration="800">
            <div className="row justify-content-cwnter align-items-center pb-4">
              <div className="col-4 d-flex justify-content-center align-items-center">
                <FaFacebook size={32} color="#f6edd9" />
              </div>
              <div className="col-4 d-flex justify-content-center align-items-center">
                <FaYoutube size={32} color="#f6edd9" />
              </div>
              <div className="col-4 d-flex justify-content-center align-items-center">
                <FaInstagram size={32} color="#f6edd9" />
              </div>
            </div>
          </div>

          <div
            className="row  justify-content-center align-items-center"
            data-aos="fade"
            data-aos-easing="ease-in-out"
            data-aos-delay="100"
            data-aos-duration="800">
            <div
              className="col-lg-6 col-md-12 mb-lg-0 w-100 d-flex justify-content-start align-items-center"
              data-aos="fade"
              data-aos-easing="ease-in-out"
              data-aos-delay="100"
              data-aos-duration="800">
              <Form />
            </div>

            <div className="col-md-6 col-12 mb-4 mb-lg-0 d-flex flex-column align-items-center">
              <div className="whatsapp-contact mt-4 d-flex flex-column justify-content-center align-items-center">
                <h6>
                  For all your enquiries, you can contact us through WhatsApp
                </h6>
                <a
                  className="btn btn-info text-white fw-bold px-4 mt-2 d-flex justify-content-center align-items-center"
                  href="https://wa.link/8k0f7s"
                  target="_blank"
                  rel="nofollow">
                  <FaWhatsapp className="me-3" size={20} color="#f6edd9" />
                  Contact Us !
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer
        data-aos="fade"
        data-aos-easing="ease-in-out"
        data-aos-delay="100"
        data-aos-duration="800"
      />
    </div>
  );
}

export default Home;
