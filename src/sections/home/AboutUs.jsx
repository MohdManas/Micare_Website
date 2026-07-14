// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { LuHeart, LuShield, LuAward, LuUsers } from "react-icons/lu";

const AboutUs = () => {
  const features = [
    {
      id: 1,
      number: "1",
      title: "Compassionate Healthcare",
      description:
        "We provide caring, empathetic medical services with a focus on patient comfort and well-being.",
      icon: LuHeart,
    },
    {
      id: 2,
      number: "2",
      title: "Advanced Medical Technology",
      description:
        "State-of-the-art equipment and cutting-edge medical technology for accurate diagnosis and treatment.",
      icon: LuShield,
    },
    {
      id: 3,
      number: "3",
      title: "Expert Medical Team",
      description:
        "Highly qualified and experienced medical professionals dedicated to excellence in healthcare.",
      icon: LuAward,
    },
    {
      id: 4,
      number: "4",
      title: "Patient-Centered Approach",
      description:
        "Every treatment plan is tailored to meet individual patient needs and preferences.",
      icon: LuUsers,
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-accent font-medium text-lg mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            About MICARE
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary leading-tight max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            We Focus On Patient-Centered Care, Cutting-Edge Medical Solutions,
            With Dedication, Safety, Excellence, And Innovation.
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/32213424/pexels-photo-32213424.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
                alt="Medical professionals providing compassionate care"
                className="w-full h-64 md:h-80 lg:h-96 object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.p
              className="text-muted text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              We are committed to providing comprehensive, high-quality medical
              care tailored to your needs. Whether you require preventive
              check-ups they specialized treatments, or emergency care
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  className="group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                >
                  <div className="flex items-start space-x-4">
                    <motion.div
                      className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/95 transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <span className="text-accent font-bold text-sm">
                        {feature.number}
                      </span>
                    </motion.div>

                    <div className="flex-1">
                      <h3 className="font-bold text-secondary mb-2 group-hover:text-accent transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-muted text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 lg:mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { number: "15+", label: "Years Experience" },
            { number: "2500+", label: "Happy Patients" },
            { number: "50+", label: "Expert Doctors" },
            { number: "24/7", label: "Emergency Care" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
            >
              <motion.h3
                className="text-2xl lg:text-3xl font-bold text-accent mb-2"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                {stat.number}
              </motion.h3>
              <p className="text-muted font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
