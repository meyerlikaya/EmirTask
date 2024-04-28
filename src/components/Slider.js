import React, { useState } from "react";

const Carousel = ({ imdb }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    const newIndex =
      currentSlide === 0 ? imdb.length - 1 : currentSlide - 1;
    setCurrentSlide(newIndex);
  };

  const nextSlide = () => {
    const newIndex =
      currentSlide === imdb.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newIndex);
  };

  if (!imdb || imdb.length === 0) {
    return <div>Herhangi bir film yok!</div>;
  }

  return (
    <div className="w-full h-96 relative">
      {imdb.map((movie, index) => (
        <div
          key={index}
          className={`${index === currentSlide ? "block" : "hidden"} duration-700 ease-in-out`}
        >
          <img
            src={movie.img}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            style={{ maxWidth: "100%", maxHeight: "100%" }} // Resim boyutları
            alt={`Slide ${index + 1}`}
          />
        </div>
      ))}
      <button
        className="absolute w-12 h-12 ml-6 lg:ml-10 bg-white rounded-2xl text-3xl top-1/2 left-0 transform -translate-y-1/2"
        onClick={prevSlide}
      >
        &lt;
      </button>
      <button
        className="absolute w-12 h-12 mr-6 lg:mr-10 bg-white rounded-2xl  text-3xl top-1/2 right-0 transform -translate-y-1/2"
        onClick={nextSlide}
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
