import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { LuHeart, LuChevronRight, LuChevronLeft } from "react-icons/lu";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Hero = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Expert Medical Guidance for a Healthier Life",
      subtitle: "Medical & Health Center",
      description:
        "Providing comprehensive healthcare services with state-of-the-art facilities and experienced medical professionals.",
      image:
        "https://images.pexels.com/photos/5327584/pexels-photo-5327584.jpeg",
      primaryButton: "Explore Department",
      secondaryButton: "Meet our Doctors",
    },
    {
      id: 2,
      title: "Quality Medical Care for Healthier and Tomorrow",
      subtitle: "Medical & Health Center",
      description:
        "Advanced medical technology combined with compassionate care to ensure the best health outcomes for our patients.",
      image:
        "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
      primaryButton: "Book Consultation",
      secondaryButton: "Our Services",
    },
    {
      id: 3,
      title: "Comprehensive Healthcare Solutions",
      subtitle: "Medical & Health Center",
      description:
        "From preventive care to specialized treatments, we offer complete healthcare solutions under one roof.",
      image:
        "https://images.pexels.com/photos/4421496/pexels-photo-4421496.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
      primaryButton: "Emergency Care",
      secondaryButton: "Contact Us",
    },
  ];

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.activeIndex);
  };

  const goToSlide = (index) => {
    if (swiperRef) {
      swiperRef.slideTo(index);
    }
  };

  const nextSlide = () => {
    if (swiperRef) {
      swiperRef.slideNext();
    }
  };

  const prevSlide = () => {
    if (swiperRef) {
      swiperRef.slidePrev();
    }
  };
  return (
    <section className="relative h-screen overflow-hidden p-0 md:p-6 lg:p-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={1000}
        loop={true}
        onSwiper={setSwiperRef}
        onSlideChange={handleSlideChange}
        className="h-full md:rounded-xl overflow-hidden shadow-md"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full flex items-center overflow-hidden">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/20 lg:to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 container mx-auto px-4 lg:px-8">
                <div className="max-w-2xl lg:max-w-3xl">
                  {/* Subtitle with Icon */}
                  <motion.div
                    className="flex items-center space-x-3 mb-6 lg:mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    key={`subtitle-${slide.id}`}
                  >
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <LuHeart className="w-5 h-5 lg:w-6 lg:h-6 text-white fill-current" />
                    </div>
                    <h2 className="text-lg md:text-xl lg:text-2xl font-medium text-secondary">
                      {slide.subtitle}
                    </h2>
                  </motion.div>

                  {/* Main Title */}
                  <motion.h1
                    className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-secondary leading-tight mb-4 lg:mb-6"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    key={`title-${slide.id}`}
                  >
                    {slide.title}
                  </motion.h1>

                  {/* Description */}
                  <motion.p
                    className="text-base md:text-lg text-muted mb-8 lg:mb-10 max-w-xl leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    key={`desc-${slide.id}`}
                  >
                    {slide.description}
                  </motion.p>

                  {/* Call to Action Buttons */}
                  <motion.div
                    className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8 lg:mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    key={`buttons-${slide.id}`}
                  >
                    <motion.button
                      className="flex items-center justify-center space-x-2 bg-accent text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full font-medium text-base lg:text-lg hover:bg-accent-90 transition-colors duration-200 shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>{slide.primaryButton}</span>
                      <span>→</span>
                    </motion.button>
                    <motion.button
                      className="flex items-center justify-center space-x-2 bg-white text-secondary px-6 lg:px-8 py-3 lg:py-4 rounded-full font-medium text-base lg:text-lg hover:bg-primary transition-colors duration-200 shadow-lg border border-primary/90"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>{slide.secondaryButton}</span>
                      <span>→</span>
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows */}
      <div className="absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 z-20">
        <div className="flex flex-col space-y-3 lg:space-y-4">
          <motion.button
            onClick={nextSlide}
            className="w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary transition-colors duration-200 hover:shadow-xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <LuChevronRight className="w-5 h-5 lg:w-6 lg:h-6 text-muted" />
          </motion.button>
          <motion.button
            onClick={prevSlide}
            className="w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary transition-colors duration-200 hover:shadow-xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <LuChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 text-muted" />
          </motion.button>
        </div>
      </div>

      {/* Custom Slide Indicators */}
      <motion.div
        className="absolute bottom-10 lg:bottom-12 left-8 lg:left-10 z-20 flex space-x-2 lg:space-x-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 lg:w-4 lg:h-4 rounded-full transition-all duration-300 ${
              activeSlide === index
                ? "bg-accent scale-110"
                : "bg-secondary/30 hover:bg-secondary/40"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          />
        ))}
      </motion.div>

      {/* Progress Bar */}
      {/* <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
        <motion.div
          className="h-full bg-accent"
          initial={{ width: "0%" }}
          animate={{ width: `${((activeSlide + 1) / slides.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div> */}
    </section>
  );
};

export default Hero;
