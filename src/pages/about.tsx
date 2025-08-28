import {
  ArrowRight,
  Target,
  Lightbulb,
  Shield,
  Users,
  Award,
} from "lucide-react";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function About() {
  const words = ["Vision", "Execution", "Strategy", "Innovation"];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let typingTimeout: ReturnType<typeof setTimeout>;

    if (isDeleting) {
      typingTimeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length - 1));
      }, 100);
    } else {
      typingTimeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length + 1));
      }, 150);
    }

    if (!isDeleting && text === currentWord) {
      setTimeout(() => setIsDeleting(true), 1000);
    }

    if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, wordIndex, words]);

  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description:
        "We are committed to delivering solutions that make a real impact on your business success.",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description:
        "We stay ahead of technology trends to provide cutting-edge solutions for modern challenges.",
    },
    {
      icon: Users,
      title: "Client-Focused",
      description:
        "Your success is our priority. We work closely with you throughout every project phase.",
    },
    {
      icon: Award,
      title: "Quality Assured",
      description:
        "We maintain the highest standards through rigorous testing and code review processes.",
    },
  ];

  // Reusable animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <div className="bg-white text-gray-900 overflow-hidden">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="text-center py-20 px-6 max-w-5xl mx-auto"
      >
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-gray-100 rounded-full">
            <ArrowRight className="w-8 h-8 text-gray-800" />
          </div>
        </div>
        <h2 className="text-4xl font-bold mb-4">Meet EmmaTech</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          At Mexygabriel, we build digital solutions that serve people and power
          progress. Our mission is to create ecosystems that solve real problems
          and drive meaningful impact. With a multidisciplinary team and a
          human–first approach, we simplify complexity, scale innovation, and
          deliver technology that transforms.
        </p>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeUp}>
              <h2 className="text-center text-4xl font-bold text-gray-900 mb-6">
                About Us
              </h2>
              <div className="text-center mb-10">
                <h2 className="text-4xl font-bold text-gray-900">
                  Emmatech{" "}
                  <span className="text-blue-600 border-r-2 border-blue-600 pr-1 animate-pulse">
                    {text}
                  </span>
                </h2>
              </div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                TechFlow is a forward-thinking technology company specializing
                in custom software development, web applications, and digital
                transformation solutions. We combine technical expertise with
                creative problem-solving to deliver exceptional results.
              </p>

              {/* Stats */}
              <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <motion.div variants={fadeUp} className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-xl">5+</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Years of Experience</h4>
                    <p className="text-gray-600">
                      Delivering innovative solutions across various industries
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                    <span className="text-teal-600 font-bold text-xl">50+</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Expert Developers</h4>
                    <p className="text-gray-600">
                      Skilled professionals with diverse technical backgrounds
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-orange-600 font-bold text-xl">24/7</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Support & Maintenance</h4>
                    <p className="text-gray-600">
                      Round-the-clock support for your critical applications
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="relative"
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl transform rotate-6"></div>
              <img
                src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="relative rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </motion.div>
          </div>

          {/* Values */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mt-20"
          >
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Our Core Values
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    className="text-center group"
                    whileHover={{ scale: 1.04 }}
                    transition={{ type: "spring", stiffness: 220, damping: 18 }}
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full mb-6">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Learn More */}
          {/* <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform">
              Learn More
            </button>
          </motion.div> */}
        </div>
      </motion.section>

      {/* Mission & Vision */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-10 text-center py-16 bg-black px-6"
      >
        <div>
          <div className="flex justify-center mb-4">
            <Users className="w-10 h-10 text-green-600" />
          </div>
          <h3 className="text-2xl font-semibold mb-2 text-white">Mission</h3>
          <p className="text-white">
            To deliver intelligent, secure, and scalable digital solutions that
            solve real-world problems, drive innovation, and create value for
            every client we serve.
          </p>
        </div>
        <div>
          <div className="flex justify-center mb-4">
            <Target className="w-10 h-10 text-green-600" />
          </div>
          <h3 className="text-2xl font-semibold mb-2 text-white">Vision</h3>
          <p className="text-white">
            To be a global leader in digital transformation empowering
            governments, institutions, and enterprises worldwide to build
            smarter, more efficient, and inclusive systems through innovative
            technology.
          </p>
        </div>
      </motion.section>

      {/* About with Image */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-10 items-center py-20 px-6 max-w-6xl mx-auto"
      >
        <div>
          <h3 className="text-2xl font-bold mb-4">EmmaTech</h3>
           <p className="text-gray-600 mb-4">
            At EmmaTech, we are passionate about building digital ecosystems
            that power smart governments, efficient enterprises, and thriving
            institutions...
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg h-96">
          <img
            src="https://plus.unsplash.com/premium_photo-1745457820708-34cfe481388a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dGVjaCUyMGdhdGhlcmluZ3xlbnwwfHwwfHx8MA%3D%3D"
            alt="About page"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.section>

      {/* Innovation + Why Choose Us */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-2 gap-10 py-20 px-6 max-w-6xl mx-auto"
      >
        <motion.div
          className="rounded-2xl overflow-hidden shadow-lg relative"
          variants={fadeUp}
        >
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
            alt="Innovation"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-6 left-6 text-white text-2xl font-bold">
            Where Innovation <br /> Meets Execution.
          </div>
        </motion.div>

        <motion.div variants={stagger}>
          <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
          <motion.ul className="space-y-4">
            {[
              {
                icon: Lightbulb,
                text: (
                  <>
                    <strong>Innovation–Driven</strong> — We don’t just deploy
                    technology — we shape ecosystems that deliver long-term impact.
                  </>
                ),
              },
              {
                icon: Target,
                text: (
                  <>
                    <strong>Sector–Focused</strong> — Tailored solutions for public
                    services, education, healthcare, finance, and enterprise operations.
                  </>
                ),
              },
              {
                icon: Shield,
                text: (
                  <>
                    <strong>Secure &amp; Scalable</strong> — Built with resilience,
                    hosted on secure cloud infrastructure, aligned with global data
                    protection standards.
                  </>
                ),
              },
              {
                icon: Users,
                text: (
                  <>
                    <strong>Human–Centered</strong> — Every product is designed with
                    the end–user in mind, ensuring accessibility, simplicity, and adoption.
                  </>
                ),
              },
            ].map(({ icon: Icon, text }, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-3"
                variants={fadeUp}
              >
                <Icon className="w-6 h-6 text-green-600" />
                <span>{text}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.section>

      {/* CTA */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative text-center py-20 px-6 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-black to-blue-600"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-white/80 text-sm font-bold mb-6 tracking-wide">
            Launch with ease
          </p>
          <h2 className="text-white text-3xl md:text-5xl font-bold mb-6">
            Innovation with a purpose: <br />
            making life easier. That’s our intention.
          </h2>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
            At Emmatech, we innovate with intention. Our mission is simple — to
            build smart, human–centered tech that solves real problems,
            simplifies life, and drives lasting impact.
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="/about"
              className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-8 py-3 rounded-full text-base 
                   transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              About Us
            </a>
            <a
              href="/services"
              className="bg-white hover:bg-gray-200 text-black font-semibold px-8 py-3 rounded-full text-base 
                   transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Our Services
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
