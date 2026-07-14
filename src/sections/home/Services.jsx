// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import {
  LuStethoscope,
  LuUserSearch,
  LuAmbulance,
  LuArrowRight,
} from "react-icons/lu";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: LuStethoscope,
      title: "Looking For Medical & Health Care",
      description:
        "Your Health is your greatest asset, and finding trusted medical and healthcare services is essential for quality life.",
      buttonText: "Find Medical Services",
      buttonLink: "#",
      delay: 0.2,
    },
    {
      id: 2,
      icon: LuUserSearch,
      title: "Find Professional & Quality Doctors",
      description:
        "Finding professional, highly qualified, and experienced doctors is essential for receiving the best medical treatment.",
      buttonText: "Find a Doctor",
      buttonLink: "#",
      delay: 0.4,
    },
    {
      id: 3,
      icon: LuAmbulance,
      title: "Need Emergency Ambulance ?",
      description:
        "In a medical emergency, every second counts. If you need a fast, reliable, and fully equipped ambulance",
      buttonText: "Find Ambulance",
      buttonLink: "#",
      delay: 0.6,
    },
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
    <section className="py-8 lg:py-12 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our Medical Services
          </motion.h2>
          <motion.p
            className="text-lg text-muted max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Comprehensive healthcare solutions designed to meet all your medical
            needs with professional excellence
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="group bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-primary/95 hover:border-primary/90"
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
            >
              {/* Icon */}
              <motion.div
                className="w-16 h-16 lg:w-20 lg:h-20 bg-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/95 transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <service.icon
                  className="w-8 h-8 lg:w-10 lg:h-10 text-accent"
                  strokeWidth={1.5}
                />
              </motion.div>

              {/* Content */}
              <div className="space-y-4">
                <motion.h3
                  className="text-xl lg:text-2xl font-bold text-secondary leading-tight group-hover:text-accent transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: service.delay }}
                >
                  {service.title}
                </motion.h3>

                <motion.p
                  className="text-muted leading-relaxed text-base lg:text-lg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: service.delay + 0.1 }}
                >
                  {service.description}
                </motion.p>

                {/* Call to Action Button */}
                <motion.a
                  href={service.buttonLink}
                  className="inline-flex items-center space-x-2 text-accent font-medium hover:text-accent transition-colors duration-200 group/link"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: service.delay + 0.2 }}
                  whileHover={{ x: 5 }}
                >
                  <span className="text-base lg:text-lg">
                    {service.buttonText}
                  </span>
                  <motion.div
                    className="flex items-center"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <LuArrowRight className="w-5 h-5" />
                  </motion.div>
                </motion.a>
              </div>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Call to Action */}
        <motion.div
          className="text-center mt-12 lg:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {/* <motion.button
            className="inline-flex items-center space-x-3 bg-accent text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-accent-90 transition-colors duration-200 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View All Services</span>
            <LuArrowRight className="w-5 h-5" />
          </motion.button> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
