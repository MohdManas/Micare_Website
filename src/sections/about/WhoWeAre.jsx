// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { LuUsers, LuShield } from "react-icons/lu";

const WhoWeAre = () => {
  const features = [
    {
      id: 1,
      number: "1",
      title: "Modern Technology",
      description:
        "Modern technology has revolutionized the way we live, work, and communicate, making everyday",
      icon: LuShield,
    },
    {
      id: 2,
      number: "2",
      title: "Certified Doctors",
      description:
        "Our team of certified doctors is committed to modern providing high-quality, patient-centered care.",
      icon: LuUsers,
    },
  ];

  return (
    <section className="relative py-6 lg:py-10 overflow-hidden">
      

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-accent font-medium text-lg mb-4 text-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Who We Are
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary leading-tight text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            We focus on patient-centered care, cutting-edge medical solutions,
            and a compassionate approach to healing with a dedication safety,
            excellence.
          </motion.h2>
        </motion.div>

        {/* Description Paragraph */}
        <motion.div
          className="mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-muted text-lg leading-relaxed max-w-5xl text-center mx-auto">
            Medical healthcare plays a vital role in ensuring overall well-being
            by providing preventive, diagnostic, and treatment services for
            individuals of all ages. From routine check-ups and vaccinations to
            advanced treatments and emergency care, healthcare services are
            designed to keep people healthy and improve their quality of life.
            With the help of modern medical technology
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/5726794/pexels-photo-5726794.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
                alt="Medical professionals providing compassionate care"
                className="w-full h-64 md:h-72 lg:h-84 object-cover"
              />
            </div>
          </motion.div>

          {/* Right Side - Features */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Feature Cards */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  className="bg-accent rounded-2xl p-6 lg:p-8 text-white shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.2 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-start space-x-4">
                    {/* Number Badge */}
                    <motion.div
                      className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-white font-bold text-lg">
                        {feature.number}
                      </span>
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-white/90 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
