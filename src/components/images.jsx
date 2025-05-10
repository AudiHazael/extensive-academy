import React from "react";

const images = Array.from({ length: 20 }, (_, i) => `/assets/img${i + 1}.jpeg`);

const ImageCarousel = () => {
  return (
    <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 d-flex justify-content-center align-items-center images">
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel">
        <div className="carousel-inner">
          {images.map((src, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}>
              <img
                src={src}
                className="d-block w-100"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
