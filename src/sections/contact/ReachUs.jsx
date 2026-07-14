// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import {
  LuMapPin,
  LuPhone,
  LuMail,
  LuClock,
  LuSend,
  LuUser,
  LuMessageSquare,
} from "react-icons/lu";

const ReachUs = () => {
  const contactInfo = [
    {
      id: 1,
      icon: LuMapPin,
      title: "Address",
      details: ["15 Washington Square New", "York, NY 10075, USA"],
      delay: 0.2,
    },
    {
      id: 2,
      icon: LuPhone,
      title: "Contacts:",
      details: ["Email : support@gmail.com", "Phone : +1 (234) 568 9900"],
      delay: 0.4,
    },
    {
      id: 3,
      icon: LuClock,
      title: "Working hours:",
      details: ["Monday – Friday: 8AM - 5PM", "Saturday: 8AM - 1PM"],
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
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
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
            Contact Us
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary leading-tight max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Connect With Our Medical Team For Personalized Care
          </motion.h2>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {contactInfo.map((info) => (
            <motion.div
              key={info.id}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-primary/95 hover:border-primary/90 text-center"
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
            >
              {/* Icon */}
              <motion.div
                className="w-16 h-16 lg:w-20 lg:h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/95 transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <info.icon
                  className="w-8 h-8 lg:w-10 lg:h-10 text-accent"
                  strokeWidth={1.5}
                />
              </motion.div>

              {/* Title */}
              <motion.h3
                className="text-xl lg:text-2xl font-bold text-secondary mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: info.delay }}
              >
                {info.title}
              </motion.h3>

              {/* Details */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: info.delay + 0.1 }}
              >
                {info.details.map((detail, index) => (
                  <p key={index} className="text-muted leading-relaxed">
                    {detail}
                  </p>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Form Section */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Left Side - Contact Form */}
          <motion.div
            className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl border border-primary/95"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.h3
              className="text-2xl lg:text-3xl font-bold text-secondary mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Get In Touch
            </motion.h3>

            <form className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <label className="block text-muted font-medium mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <LuUser className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted" />
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full pl-12 pr-4 py-3 border border-neutral/80 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <label className="block text-muted font-medium mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <LuMail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted" />
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full pl-12 pr-4 py-3 border border-neutral/80 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Phone Number */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <label className="block text-muted font-medium mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <LuPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted" />
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full pl-12 pr-4 py-3 border border-neutral/80 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                  />
                </div>
              </motion.div>

              {/* Subject */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                <label className="block text-muted font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full px-4 py-3 border border-neutral/80 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                />
                <div className="relative mt-4">
                  <LuMessageSquare className="absolute left-3 top-4 w-5 h-5 text-muted" />
                  <textarea
                    rows={5}
                    placeholder="Enter your message"
                    className="w-full pl-12 pr-4 py-3 border border-neutral/80 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 resize-none"
                  ></textarea>
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full bg-accent text-white px-6 py-4 rounded-lg font-medium text-lg hover:bg-accent-90 transition-colors duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.3 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <LuSend className="w-5 h-5" />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Right Side - Map/Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <motion.img
                src="https://images.pexels.com/photos/11623619/pexels-photo-11623619.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
                alt="Medical facility location and contact"
                className="w-full h-64 md:h-80 lg:h-96 object-cover"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />

              {/* Overlay with Contact Info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              <motion.div
                className="absolute bottom-6 left-6 right-6 text-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <h4 className="text-xl font-bold mb-2">Visit Our Clinic</h4>
                <p className="text-white/90 mb-4">
                  Experience world-class healthcare in our state-of-the-art
                  medical facility
                </p>
                <div className="flex items-center space-x-2">
                  <LuMapPin className="w-5 h-5 text-accent" />
                  <span className="text-sm">
                    15 Washington Square, New York
                  </span>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="mt-12 lg:mt-16 bg-accent rounded-2xl p-6 lg:p-8 text-white text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.h3
                className="text-2xl lg:text-3xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                Need Emergency Care?
              </motion.h3>
              <motion.p
                className="text-white/90 mb-6 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                Our emergency medical team is available 24/7 to provide
                immediate care when you need it most
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                <div className="flex items-center space-x-2">
                  <LuPhone className="w-6 h-6" />
                  <span className="text-md font-bold">Emergency: 911</span>
                </div>
                <div className="flex items-center space-x-2">
                  <LuPhone className="w-6 h-6" />
                  <span className="text-md font-bold">
                    Direct: +1 (234) 568-9900
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReachUs;
