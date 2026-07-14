import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { LuStar, LuQuote, LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonials = () => {
  // const [scrollY, setScrollY] = useState(0);
  const [swiperRef, setSwiperRef] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => setScrollY(window.scrollY);
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  const testimonials = [
    {
      id: 1,
      title: "Exceptional Care and Compassion",
      quote:
        "The doctors and nurses at provided me with outstanding care. From the moment walked care expertise and kindness.",
      name: "Nicolas M. Baldwin",
      role: "Businessman",
      avatar:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100",
      rating: 5,
    },
    {
      id: 2,
      title: "Professional and Caring Staff",
      quote:
        "I was impressed by the professionalism and genuine care shown by every member of the medical team. They made me feel comfortable throughout my treatment.",
      name: "Sarah Johnson",
      role: "Teacher",
      avatar:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100",
      rating: 5,
    },
    {
      id: 3,
      title: "Outstanding Medical Excellence",
      quote:
        "The level of medical expertise and attention to detail exceeded my expectations. I felt confident in their care from day one.",
      name: "Michael Chen",
      role: "Engineer",
      avatar:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100",
      rating: 5,
    },
  ];

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.activeIndex);
    // setActiveSlide(swiper.realIndex);
  };

  // const nextSlide = () => {
  //   if (swiperRef) {
  //     swiperRef.slideNext();
  //   }
  // };

  // const prevSlide = () => {
  //   if (swiperRef) {
  //     swiperRef.slidePrev();
  //   }
  // };

  return (
    <section className="relative py-6 lg:py-10 overflow-hidden">
      {/* Content Container */}
      <div className="relative z-10 px-4 lg:px-8">
        {/* Section Header */}
        {/* <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-muted font-medium text-lg mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Testimonials
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary leading-tight max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Your Health, Our Commitment Hear From Our Patients
          </motion.h2>
        </motion.div> */}

        {/* Main Content Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center h-full"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Left Side - Testimonials Slider */}
          <div className="relative overflow-hidden py-10 px-4 md:px-6 lg:px-8 bg-primary/95 rounded-xl min-h-max">
            <motion.div
              className="text-center mb-12 lg:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <motion.p
                className="text-muted font-medium text-lg mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Our Testimonials
              </motion.p>
              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary leading-tight max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Your Health, Our Commitment Hear From Our Patients
              </motion.h2>
            </motion.div>
            <div>
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                centeredSlides={true}
                watchOverflow={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                speed={800}
                loop={true}
                allowTouchMove={true}
                onSwiper={setSwiperRef}
                onSlideChange={handleSlideChange}
                className="testimonials-swiper"
              >
                {testimonials.map((testimonial) => (
                  <SwiperSlide key={testimonial.id}>
                    <motion.div
                      className="bg-primary rounded-2xl p-6 lg:p-8 relative"
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      {/* Quote Icon */}
                      <motion.div
                        className="absolute -top-5 right-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center"
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        <LuQuote className="w-6 h-6 text-white fill-current" />
                      </motion.div>

                      {/* Star Rating */}
                      <motion.div
                        className="flex items-center space-x-1 mb-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                      >
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                          >
                            <LuStar className="w-5 h-5 text-yellow-400 fill-current" />
                          </motion.div>
                        ))}
                      </motion.div>

                      {/* Title */}
                      <motion.h3
                        className="text-xl lg:text-2xl font-bold text-secondary mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                      >
                        "{testimonial.title}"
                      </motion.h3>

                      {/* Quote */}
                      <motion.blockquote
                        className="text-muted text-lg leading-relaxed mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                      >
                        "{testimonial.quote}"
                      </motion.blockquote>

                      {/* Author Info */}
                      <motion.div
                        className="flex items-center space-x-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                      >
                        {/* Avatar */}
                        <motion.div
                          className="w-12 h-12 rounded-full overflow-hidden border-2 border-accent/20"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>

                        {/* Name and Role */}
                        <div>
                          <h4 className="font-bold text-secondary">
                            {testimonial.name}
                          </h4>
                          <p className="text-muted text-sm">
                            {testimonial.role}
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="flex items-center justify-center mt-6 space-x-4">
                {/* Slide Indicators */}
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => swiperRef?.slideTo(index)}
                      // onClick={() => swiperRef.current?.slideToLoop(index)} // use slideToLoop for looping swiper
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        activeSlide === index
                          ? "bg-accent scale-125"
                          : "bg-primary/80 hover:bg-muted/70"
                      }`}
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.8 }}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{
                        opacity: 1,
                        scale: activeSlide === index ? 1.25 : 1,
                      }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 1.0 + index * 0.1 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Static Image */}
          <motion.div
            className="relative h-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl md:h-100 lg:h-180">
              <motion.img
                src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
                alt="Healthcare professionals providing compassionate care"
                className="w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Custom Swiper Styles */}
      <style>{`
        .testimonials-swiper {
          overflow: visible;
        }
        .testimonials-swiper .swiper-slide {
          opacity: 1;
          transform: scale(1);
          transition: all 0.5s ease;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
