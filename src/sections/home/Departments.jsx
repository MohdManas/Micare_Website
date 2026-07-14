import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import {
  LuHeart,
  LuEye,
  LuBrain,
  LuScissors,
  LuSmile,
  LuStethoscope,
  LuArrowRight,
  LuHouse,
  LuShield,
  LuClock,
} from "react-icons/lu";

const Departments = () => {
  const departments = [
    {
      id: 1,
      category: "Hematology",
      title: "Hematology",
      icon: LuHeart,
      description:
        "We provide comprehensive Mental Health & Wellness services designed to",
      delay: 0.1,
    },
    {
      id: 2,
      category: "Orthopedic",
      title: "Ophthalmology",
      icon: LuEye,
      description:
        "We provide comprehensive Mental Health & Wellness services designed to",
      delay: 0.2,
    },
    {
      id: 3,
      category: "Neurology",
      title: "Neurology",
      icon: LuBrain,
      description:
        "We provide comprehensive Mental Health & Wellness services designed to",
      delay: 0.3,
    },
    {
      id: 4,
      category: "Surgery",
      title: "Plastic Surgery",
      icon: LuScissors,
      description:
        "We provide comprehensive Mental Health & Wellness services designed to",
      delay: 0.4,
    },
    {
      id: 5,
      category: "Dentist",
      title: "Dental Care",
      icon: LuSmile,
      description:
        "We provide comprehensive Mental Health & Wellness services designed to",
      delay: 0.5,
    },
    {
      id: 6,
      category: "Health",
      title: "Medicine Care",
      icon: LuStethoscope,
      description:
        "We provide comprehensive Mental Health & Wellness services designed to",
      delay: 0.6,
    },
  ];

  const homeCareFeatures = [
    {
      icon: LuShield,
      title: "Safe & Effective Care",
      description: "Professional medical care in the comfort of your home",
    },
    {
      icon: LuClock,
      title: "24/7 Availability",
      description: "Round-the-clock medical support when you need it",
    },
    {
      icon: LuHeart,
      title: "Patient-Centered",
      description: "Personalized treatment plans for optimal recovery",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary via-neutral to-primary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
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
            Explore Medical Department
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary leading-tight max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Providing Excellence Across Medical Fields Departments For
            Specialized Healthcare
          </motion.h2>
        </motion.div>

        {/* Departments Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {departments.map((dept) => (
            <motion.div
              key={dept.id}
              className="group bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-primary/95 hover:border-primary/90"
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
            >
              {/* Category Badge */}
              <motion.div
                className="inline-block px-4 py-2 bg-primary rounded-full text-sm font-medium text-accent mb-4 group-hover:bg-primary/95 group-hover:text-accent transition-colors duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: dept.delay }}
              >
                {dept.category}
              </motion.div>

              {/* Department Title */}
              <motion.h3
                className="text-xl lg:text-2xl font-bold text-secondary mb-6 group-hover:text-accent transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: dept.delay + 0.1 }}
              >
                {dept.title}
              </motion.h3>

              {/* Icon */}
              <motion.div
                className="w-16 h-16 lg:w-20 lg:h-20 bg-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/95 transition-colors duration-300"
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: dept.delay + 0.2,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <dept.icon
                  className="w-8 h-8 lg:w-10 lg:h-10 text-accent"
                  strokeWidth={1.5}
                />
              </motion.div>

              {/* Description */}
              <motion.p
                className="text-muted leading-relaxed text-base mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: dept.delay + 0.3 }}
              >
                {dept.description}
              </motion.p>

              {/* View Details Link */}
              <motion.a
                href="#"
                className="inline-flex items-center space-x-2 text-accent font-medium hover:text-accent transition-colors duration-200 group/link"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: dept.delay + 0.4 }}
                whileHover={{ x: 5 }}
              >
                <span>View Details</span>
                <motion.div
                  className="flex items-center"
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  <LuArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.a>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Home Care Section */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Left Side - Content */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="bg-secondary rounded-2xl p-6 lg:p-8 text-white">
              <motion.h3
                className="text-2xl lg:text-3xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                Need For Home Care
                <span className="text-accent"> Medical Treatments?</span>
              </motion.h3>

              <motion.p
                className="text-muted/70 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                We are committed to delivering safe, effective, and
                patient-centered care.
              </motion.p>

              {/* Features */}
              <motion.div
                className="space-y-4 mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                {homeCareFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                  >
                    <feature.icon className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-muted text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Call to Action */}
              <motion.button
                className="inline-flex items-center space-x-3 bg-accent text-white px-6 py-3 rounded-full font-medium hover:bg-accent-90 transition-colors duration-200 shadow-lg hover:shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <LuHouse className="w-5 h-5" />
                <span>Get Home Care Service</span>
                <LuArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="relative">
              <motion.img
                src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
                alt="Professional medical care at home"
                className="w-full h-64 md:h-80 lg:h-102 object-cover rounded-2xl shadow-xl"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Departments;
