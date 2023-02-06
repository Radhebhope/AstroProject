import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">
          Discover Your Destiny with Astrology
        </h2>
        <h3 className="text-2xl text-gray-600 dark:text-gray-400 text-center mb-12">
          Discover the deeper meaning of astrology and unlock your full
          potential
        </h3>
        {/* CTA */}
        <div className="flex flex-col md:flex-row items-center justify-center">
          <a
            href="#"
            className="bg-gray-800 dark:bg-gray-100 text-white dark:text-gray-800 font-bold py-3 px-4 rounded hover:bg-gray-700 dark:hover:bg-gray-200 transition duration-200"
          >
            Get Started
          </a>
          <a
            href="#"
            className="mx-4 md:mx-8 my-4 md:my-0 text-gray-800 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-200 transition duration-200"
          >
            Learn More
          </a>
        </div>
        {/* Images Carousel */}
        <div className="mt-10">
          <Slider {...settings}>
            <div className="w-64 h-64 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg mx-2">
              <img
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                alt="Astrology"
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
            <div className="w-64 h-64 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg mx-2">
              <img
                src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg"
                alt="Astrology"
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
            <div className="w-64 h-64 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg mx-2">
              <img
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                alt="Astrology"
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
            <div className="w-64 h-64 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg mx-2">
              <img
                src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg"
                alt="Astrology"
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Hero;
