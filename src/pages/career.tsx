import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CareerPage() {
  const jobs = [
    {
      title: "Frontend Developer",
      location: "Remote",
      description:
        "Work with React, TypeScript, and TailwindCSS to build modern UIs.",
    },
    {
      title: "Backend Developer",
      location: "Lagos, Nigeria",
      description: "Develop and maintain APIs with Node.js and PostgreSQL.",
    },
    {
      title: "UI/UX Designer",
      location: "Remote",
      description:
        "Design beautiful and user-friendly interfaces for web apps.",
    },
    {
      title: "Product Manager",
      location: "Abuja, Nigeria",
      description:
        "Lead product development and collaborate with engineers & designers.",
    },
  ];

  const perks = [
    "Flexible remote work options",
    "Health & wellness benefits",
    "Opportunities for growth",
    "Collaborative & inclusive culture",
    "Latest tech tools & resources",
    "Annual retreats & team bonding",
  ];

  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-24 px-6 text-center">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-6xl font-bold"
        >
          Join Our Team
        </motion.h1>
        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-blue-100"
        >
          At EmmaTech, we don’t just build products — we build people. Grow your
          career while shaping the future of technology with us.
        </motion.p>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6 text-blue-600"
        >
          Why Work With Us
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 max-w-3xl mx-auto leading-relaxed"
        >
          We believe people do their best work when they feel valued,
          challenged, and inspired. By joining EmmaTech, you’ll collaborate with
          bright minds, access opportunities for personal and professional
          growth, and be part of a team that truly cares about impact.
        </motion.p>

        {/* Images Row */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            {
              src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
              alt: "Teamwork",
            },
            {
              src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
              alt: "Collaboration",
            },
            {
              src: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
              alt: "Innovation",
            },
          ].map((img, idx) => (
            <motion.img
              key={idx}
              src={img.src}
              alt={img.alt}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="rounded-xl shadow-md hover:shadow-xl transition object-cover h-64 w-full"
            />
          ))}
        </div>
      </section>

      {/* Perks & Benefits */}
      <section className="bg-blue-50 py-20 px-6">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-blue-600 mb-12"
        >
          Perks & Benefits
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {perks.map((perk, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition"
            >
              <p className="text-gray-800 font-medium">{perk}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-semibold mb-12 text-center text-blue-600"
        >
          Current Openings
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white shadow-lg rounded-2xl p-8 flex flex-col justify-between border border-gray-100 hover:shadow-2xl transition"
            >
              <div>
                <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                <p className="text-blue-600 font-medium">{job.location}</p>
                <p className="mt-4 text-gray-600">{job.description}</p>
              </div>
              <Link
                to="/apply"
                className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
              >
                Apply Now
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 bg-gradient-to-r from-blue-700 to-blue-500 text-center text-white"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Your Future Starts Here
        </h2>
        <p className="mb-8 max-w-2xl mx-auto text-blue-100">
          Ready to take your career to the next level? Explore opportunities at
          EmmaTech and let’s build the future together.
        </p>
        <Link
          to="/apply"
          className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition"
        >
          Explore Careers
        </Link>
      </motion.section>
    </div>
  );
}
