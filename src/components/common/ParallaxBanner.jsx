// import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { LuChevronRight, LuHouse } from "react-icons/lu";

const ParallaxBanner = ({
  title = "",
  description = "",
  breadcrumbItems = [],
  bgImgUrl = "",
}) => {
  // const [scrollY, setScrollY] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => setScrollY(window.scrollY);
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // const breadcrumbItems = [
  //   { name: "Home", href: "#", icon: LuHouse },
  //   { name: "About Us", href: "#", current: true },
  // ];
  return (
    <section className="h-160 py-6 px-4 md:px-6 lg:px-8">
      <div className="relative h-full overflow-hidden rounded-xl">
        {/* Fixed Background Image with Parallax */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url(${bgImgUrl})`,
            // transform: `translateY(${scrollY * 0.1}px)`,
            // willChange: "transform",
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/70 via-secondary/60 to-secondary/40"></div>

        {/* Content Container */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl">
              {/* Main Title */}
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 lg:mb-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {title}
              </motion.h1>

              {/* Breadcrumb Navigation */}
              <motion.nav
                className="flex items-center space-x-2 text-white/90"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                aria-label="Breadcrumb"
              >
                <ol className="flex items-center space-x-2">
                  {breadcrumbItems.map((item, index) => (
                    <li key={item.name} className="flex items-center">
                      {index === 0 && (
                        <motion.div
                          className="mr-2"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <item.icon className="w-5 h-5 text-accent" />
                        </motion.div>
                      )}

                      {item.current ? (
                        <motion.span
                          className="text-accent font-medium text-xl"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.6, delay: 0.6 }}
                        >
                          {item.name}
                        </motion.span>
                      ) : (
                        <motion.a
                          href={item.href}
                          className="text-white/80 hover:text-accent transition-colors duration-200 text-xl font-medium"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.name}
                        </motion.a>
                      )}

                      {index < breadcrumbItems.length - 1 && (
                        <motion.div
                          className="mx-3"
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.5 + index * 0.1,
                          }}
                        >
                          <LuChevronRight className="w-5 h-5 text-white/60" />
                        </motion.div>
                      )}
                    </li>
                  ))}
                </ol>
              </motion.nav>

              {/* Description */}
              <motion.p
                className="text-white/80 text-lg md:text-xl lg:text-2xl max-w-3xl mt-6 lg:mt-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {description}
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxBanner;
