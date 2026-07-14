import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  LuHeart,
  LuDollarSign,
  LuShield,
  LuStar,
  // LuUsers,
  // LuCheckCircle,
} from "react-icons/lu";

const WhyChooseUs = () => {
  // const [scrollY, setScrollY] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => setScrollY(window.scrollY);
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  const features = [
    {
      id: 1,
      icon: LuHeart,
      title: "Personalized Patient Care",
      description:
        "We take a compassionate, patient-centered approach, ensuring you feel comfortable and well-informed",
      delay: 0.2,
    },
    {
      id: 2,
      icon: LuDollarSign,
      title: "Affordable & Transparent Pricing",
      description:
        "Our commitment to clear, upfront pricing means you'll always know the cost of your treatment before",
      delay: 0.4,
    },
    {
      id: 3,
      icon: LuShield,
      title: "Safety & Hygiene Standards",
      description:
        "At our eye care center, we prioritize the safety and well-being of every patient by adhering to standards",
      delay: 0.6,
    },
  ];

  const doctorProfiles = [
    "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=60&h=60",
    "https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=60&h=60",
    "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=60&h=60",
    "https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg?auto=compress&cs=tinysrgb&w=60&h=60",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  return (
    <section className="relative py-6 lg:py-10 px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="rounded-xl bg-primary py-10">
        <div className="relative z-10 px-4 lg:px-8">
          <motion.div
            className="text-center mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="text-accent font-medium text-lg mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Why Choose Us
            </motion.p>
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary leading-tight max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Leading The Way In Healthcare Vision Care Precision, Expertise
            </motion.h2>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Features */}
            <motion.div
              className="space-y-8 lg:space-y-10"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  className="flex items-start space-x-4 lg:space-x-6"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Icon */}
                  <motion.div
                    className="w-12 h-12 lg:w-16 lg:h-16 bg-primary/95 rounded-2xl flex items-center justify-center flex-shrink-0 border border-primary/90"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <feature.icon
                      className="w-6 h-6 lg:w-8 lg:h-8 text-accent"
                      strokeWidth={1.5}
                    />
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <motion.h3
                      className="text-xl lg:text-2xl font-bold text-secondary mb-3 lg:mb-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: feature.delay }}
                    >
                      {feature.title}
                    </motion.h3>
                    <motion.p
                      className="text-muted leading-relaxed text-base lg:text-lg"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: feature.delay + 0.1 }}
                    >
                      {feature.description}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Right Side - Image and Stats */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <motion.img
                  src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
                  alt="Professional medical team providing quality healthcare"
                  className="w-full h-64 md:h-80 lg:h-96 object-cover"
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Statistics Card */}
              <motion.div
                className="absolute -bottom-6 right-6 lg:-bottom-8 lg:right-8 bg-white rounded-2xl p-6 lg:p-8 shadow-xl border border-primary/95 max-w-xs"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                {/* Star Rating */}
                <motion.div
                  className="flex items-center space-x-1 mb-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 1.0 + i * 0.1 }}
                    >
                      <LuStar className="w-4 h-4 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Number */}
                <motion.h3
                  className="text-3xl lg:text-4xl font-bold text-secondary mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  2,000+
                </motion.h3>

                {/* Description */}
                <motion.p
                  className="text-muted text-sm lg:text-base mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.3 }}
                >
                  Experienced doctors
                  <br />
                  at your service
                </motion.p>

                {/* Doctor Profiles */}
                <motion.div
                  className="flex items-center space-x-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                >
                  <div className="flex -space-x-2">
                    {doctorProfiles.map((profile, index) => (
                      <motion.div
                        key={index}
                        className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 border-white overflow-hidden"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 1.5 + index * 0.1 }}
                        whileHover={{ scale: 1.2, zIndex: 10 }}
                      >
                        <img
                          src={profile}
                          alt={`Doctor ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>
                  <motion.span
                    className="text-accent font-medium text-sm lg:text-base ml-2"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1.8 }}
                  >
                    +
                  </motion.span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
