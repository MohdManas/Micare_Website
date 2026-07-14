import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import {
  LuSearch,
  LuMenu,
  LuX,
  LuFacebook,
  LuTwitter,
  LuInstagram,
  LuLinkedin,
  LuHeart,
  LuChevronDown,
  LuPhone,
  LuMail,
  LuClock,
} from "react-icons/lu";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState(null);

  const menuItems = [
    { name: "Home", path: "/", hasDropdown: false },
    { name: "About", path: "/about", hasDropdown: false },
    {
      name: "Services",
      hasDropdown: true,
      dropdownItems: [
        { name: "Hematology", path: "/" },
        { name: "Ophthalmology", path: "/" },
        { name: "Neurology", path: "/" },
        { name: "Plastic Surgery", path: "/" },
        { name: "Dental Care", path: "/" },
      ],
    },
    { name: "Blog", path: "/", hasDropdown: false },
    { name: "Contact", path: "/contact", hasDropdown: false },
  ];

  const socialIcons = [
    { icon: LuTwitter, href: "#" },
    { icon: LuFacebook, href: "#" },
    { icon: LuInstagram, href: "#" },
    { icon: LuLinkedin, href: "#" },
  ];

  const toggleMobileDropdown = (itemName) => {
    setMobileActiveDropdown(
      mobileActiveDropdown === itemName ? null : itemName
    );
  };
  return (
    <header className="w-full p-0 md:p-6 lg:p-8">
      {/* Top Bar */}
      <div className="bg-white border-b border-primary/95">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <motion.div
              className="text-sm text-muted hidden xl:block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Need professional medical & health Care?
            </motion.div>
            <motion.div className="hidden lg:block">
              <p className="flex items-center space-x-2 text-sm">
                <LuPhone className="text-muted text-md" />
                <span>Call : </span>
                <span className="text-secondary">+919876543210</span>
              </p>
            </motion.div>
            <motion.div className="hidden lg:block">
              <p className="flex items-center space-x-2 text-sm">
                <LuMail className="text-muted text-md" />
                <span>Email : </span>
                <span className="text-secondary">micare@gmail.com</span>
              </p>
            </motion.div>
            <motion.div className="hidden md:block">
              <p className="flex items-center space-x-2 text-sm">
                <LuClock className="text-muted text-md" />
                <span>Working Hours : </span>
                <span className="text-secondary">Mon-Sat, 08am-09pm</span>
              </p>
            </motion.div>
            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {socialIcons.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-6 h-6 flex items-center justify-center text-muted hover:text-accent transition-colors duration-200"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-primary shadow-sm sticky top-0 z-50 md:rounded-xl">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/">
              <motion.div
                className="flex items-center space-x-3"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                  <LuHeart className="w-6 h-6 text-white fill-current" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-secondary">micare</h1>
                  <p className="text-xs text-muted">Health & Medical</p>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  className="relative"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-1 transition-colors duration-200 font-medium ${
                      item.name === "Home"
                        ? "text-accent"
                        : "text-muted hover:text-accent"
                    }`}
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && <LuChevronDown className="w-4 h-4" />}
                  </Link>
                  {item.hasDropdown && activeDropdown === item.name && (
                    <motion.div
                      className="absolute top-4 left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-primary/90"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <div className="py-2">
                        {item.dropdownItems.map((dropdownItem, index) => (
                          <Link
                            key={index}
                            to={dropdownItem.href}
                            className="block px-4 py-2 text-muted hover:bg-primary hover:text-accent transition-colors duration-200"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              <motion.button
                className="p-2 text-muted hover:text-accent transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <LuSearch className="w-5 h-5" />
              </motion.button>

              <motion.button
                className="hidden lg:flex items-center space-x-2 bg-accent text-white px-6 py-3 rounded-full font-medium hover:bg-accent-90 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Make Appointment</span>
                <span>→</span>
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                className="lg:hidden p-2 bg-accent text-white rounded-md hover:bg-accent-90 transition-colors duration-200"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isMenuOpen ? (
                  <LuX className="w-6 h-6" />
                ) : (
                  <LuMenu className="w-6 h-6" />
                )}
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              className="lg:hidden border-t border-primary/90 bg-white"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="py-4 space-y-2">
                {menuItems.map((item, index) => (
                  <div key={item.name}>
                    <motion.button
                      className={`w-full flex items-center justify-between px-4 py-2 text-left transition-colors duration-200 ${
                        item.name === "Home"
                          ? "text-accent bg-primary"
                          : "text-muted hover:text-accent hover:bg-primary"
                      }`}
                      onClick={() =>
                        item.hasDropdown
                          ? toggleMobileDropdown(item.name)
                          : null
                      }
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      {item.hasDropdown ? (
                        <span>{item.name}</span>
                      ) : (
                        <Link to={item.path}>{item.name}</Link>
                      )}
                      {item.hasDropdown && (
                        <LuChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            mobileActiveDropdown === item.name
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      )}
                    </motion.button>

                    {/* Mobile Dropdown Content */}
                    {item.hasDropdown && mobileActiveDropdown === item.name && (
                      <motion.div
                        className="bg-primary border-l-2 border-accent ml-4"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        <div className="py-2">
                          {item.dropdownItems.map((dropdownItem, index) => (
                            <Link
                              key={index}
                              to={dropdownItem.href}
                              className="block px-4 py-2 text-muted hover:bg-primary hover:text-accent transition-colors duration-200"
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                ))}
                <motion.button
                  className="w-full mt-4 bg-accent text-white px-6 py-3 rounded-full font-medium hover:bg-accent-90 transition-colors duration-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                >
                  Make Appointment →
                </motion.button>
              </div>
            </motion.div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
