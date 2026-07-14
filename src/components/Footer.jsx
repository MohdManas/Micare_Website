import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import {
  LuHeart,
  LuMapPin,
  LuPhone,
  LuMail,
  LuClock,
  LuArrowRight,
  LuFacebook,
  LuTwitter,
  LuInstagram,
  LuLinkedin,
} from "react-icons/lu";

const Footer = () => {
  const communityLinks = [
    { name: "Meet Our Doctors", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "FAQs", href: "/" },
    { name: "Blog", href: "/" },
    { name: "Contacts us", href: "/contact" },
  ];

  const serviceLinks = [
    { name: "Hematology", href: "/" },
    { name: "Ophthalmology", href: "/" },
    { name: "Neurology", href: "/" },
    { name: "Plastic Surgery", href: "/" },
    { name: "Dental Care", href: "/" },
  ];

  const legalLinks = [
    { name: "Privacy policy", href: "/" },
    { name: "Terms & Conditions", href: "/" },
    { name: "FAQs", href: "/" },
  ];

  const socialIcons = [
    { icon: LuFacebook, href: "/", label: "Facebook" },
    { icon: LuTwitter, href: "/", label: "Twitter" },
    { icon: LuInstagram, href: "/", label: "Instagram" },
    { icon: LuLinkedin, href: "/", label: "LinkedIn" },
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
    <footer className="p-0 md:p-6 lg:p-8">
      <div className="bg-secondary text-white md:rounded-xl">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          {/* Newsletter Section */}
          <motion.div
            className="py-12 lg:py-16 border-b border-secondary/90"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Newsletter Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  Newsletter Subscribe
                </h3>
                <p className="text-muted mb-6 lg:mb-8">
                  Subscribe our newsletter to get more updates
                </p>

                {/* Newsletter Form */}
                <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                  <motion.input
                    type="email"
                    placeholder="Email Address"
                    className="flex-1 px-6 py-3 rounded-full bg-white text-secondary placeholder-muted/70 focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-200"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    whileFocus={{ scale: 1.02 }}
                  />
                  <motion.button
                    className="inline-flex items-center justify-center space-x-2 bg-accent text-white px-6 py-3 rounded-full font-medium hover:bg-accent-90 transition-colors duration-200 shadow-lg hover:shadow-xl whitespace-nowrap"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Subscribe Now</span>
                    <LuArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>

              {/* Contact Info Cards */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* Location Card */}
                <motion.div
                  className="bg-secondary/90 rounded-xl p-6 hover:bg-secondary/80 transition-colors duration-300"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <LuMapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">
                        Our Location
                      </h4>
                      <p className="text-muted text-sm leading-relaxed">
                        70 Washington Square South, New York, NY 10012, United
                        States
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Support Card */}
                <motion.div
                  className="bg-secondary/90 rounded-xl p-6 hover:bg-secondary/80 transition-colors duration-300"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <LuPhone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Support</h4>
                      <div className="space-y-1">
                        <p className="text-muted text-sm">
                          Email Us:{" "}
                          <span className="text-accent">
                            example@gmail.com
                          </span>
                        </p>
                        <p className="text-muted text-sm">
                          Phone no:{" "}
                          <span className="text-accent">
                            +1 (234) 567 88 9990
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Schedule Hours Card */}
                <motion.div
                  className="bg-secondary/90 rounded-xl p-6 hover:bg-secondary/80 transition-colors duration-300 sm:col-span-2"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <LuClock className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-2">
                        Schedule Hours
                      </h4>
                      <div className="flex justify-between items-center">
                        <span className="text-muted text-sm">
                          Monday – Friday
                        </span>
                        <span className="text-accent text-sm font-medium">
                          08am – 09pm
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Main Footer Content */}
          <motion.div
            className="py-12 lg:py-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {/* Brand Section */}
              <motion.div className="lg:col-span-1" variants={itemVariants}>
                {/* Logo */}
                <motion.div
                  className="flex items-center space-x-3 mb-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                    <LuHeart className="w-6 h-6 text-white fill-current" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-white">micare</h1>
                    <p className="text-xs text-muted">Health & Medical</p>
                  </div>
                </motion.div>

                {/* Description */}
                <p className="text-muted leading-relaxed mb-6">
                  Medical care is essential for maintaining overall health to
                  being providing preventive, diagnostic, and treatment
                  services.
                </p>

                {/* Make Appointment Button */}
                <motion.button
                  className="inline-flex items-center space-x-2 bg-accent text-white px-6 py-3 rounded-full font-medium hover:bg-accent-90 transition-colors duration-200 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Make Appointment</span>
                  <LuArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>

              {/* Community Links */}
              <motion.div variants={itemVariants}>
                <h3 className="text-xl font-bold text-white mb-6">Community</h3>
                <ul className="space-y-3">
                  {communityLinks.map((link, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                      <motion.a
                        href={link.href}
                        className="text-muted hover:text-accent transition-colors duration-200 block"
                        whileHover={{ x: 5 }}
                      >
                        {link.name}
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Services Links */}
              <motion.div variants={itemVariants}>
                <h3 className="text-xl font-bold text-white mb-6">Services</h3>
                <ul className="space-y-3">
                  {serviceLinks.map((link, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                      <motion.a
                        href={link.href}
                        className="text-muted hover:text-accent transition-colors duration-200 block"
                        whileHover={{ x: 5 }}
                      >
                        {link.name}
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Social Media & Additional Info */}
              <motion.div variants={itemVariants}>
                <h3 className="text-xl font-bold text-white mb-6">Follow Us</h3>

                {/* Social Icons */}
                <div className="flex space-x-4 mb-6">
                  {socialIcons.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 bg-secondary/90 rounded-lg flex items-center justify-center text-muted hover:bg-accent hover:text-white transition-all duration-200"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>

                {/* Additional Contact Info */}
                <div className="space-y-3">
                  <motion.div
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <LuMail className="w-5 h-5 text-accent" />
                    <span className="text-muted text-sm">
                      info@micare.com
                    </span>
                  </motion.div>
                  <motion.div
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <LuPhone className="w-5 h-5 text-accent" />
                    <span className="text-muted text-sm">
                      +1 (234) 567-8900
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Bottom Footer */}
          <motion.div
            className="py-6 border-t border-secondary/90"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <motion.p
                className="text-muted text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                ©{" "}
                <span className="text-accent">
                  {new Date().getFullYear()} Madadz
                </span>
                , All rights reserved.
              </motion.p>

              {/* Legal Links */}
              <motion.div
                className="flex space-x-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                {legalLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    className="text-muted hover:text-accent transition-colors duration-200 text-sm"
                    whileHover={{ y: -2 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
