import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const TeamPage: React.FC = () => {
  const team = [
    {
      name: "Chukwuma Emmanuel",
      role: "CEO & Founder",
      image:
        "/images/ceo.jpeg",
      bio: "Visionary leader with 10+ years in tech industry, passionate about innovation and team growth.",
      social: { linkedin: "#", twitter: "#", github: "#" },
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      image:
        "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Full-stack architect specializing in scalable systems and modern web technologies.",
      social: { linkedin: "#", twitter: "#", github: "#" },
    },
    {
      name: "Michael Rodriguez",
      role: "Lead Developer",
      image:
        "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Expert in React, Node.js, and cloud platforms with a passion for clean, efficient code.",
      social: { linkedin: "#", twitter: "#", github: "#" },
    },
    {
      name: "Emily Davis",
      role: "UI/UX Designer",
      image:
        "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Creative designer focused on user-centered design and creating beautiful, intuitive interfaces.",
      social: { linkedin: "#", twitter: "#", github: "#" },
    },
    {
      name: "David Kim",
      role: "DevOps Engineer",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Infrastructure expert specializing in AWS, Docker, and CI/CD pipeline optimization.",
      social: { linkedin: "#", twitter: "#", github: "#" },
    },
    {
      name: "Lisa Thompson",
      role: "Project Manager",
      image:
        "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Agile project management expert ensuring smooth delivery and client satisfaction.",
      social: { linkedin: "#", twitter: "#", github: "#" },
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-teal-600 text-white py-24 text-center">
        <motion.div
          className="max-w-4xl mx-auto px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-6">Meet Our Team</h1>
          <p className="text-lg text-blue-100 leading-relaxed">
            Behind every successful project is a team of passionate, talented
            people who bring ideas to life. At EmmaTech, our strength is our
            people.
          </p>
        </motion.div>
      </section>

      {/* Team Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative mb-6">
                <div className="w-28 h-28 mx-auto rounded-full overflow-hidden ring-4 ring-blue-100 group-hover:ring-blue-200 transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>

                <div className="flex justify-center space-x-4">
                  <a
                    href={member.social.linkedin}
                    className="p-2 rounded-full bg-gray-100 hover:bg-blue-600 text-gray-600 hover:text-white transition-all duration-300"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="p-2 rounded-full bg-gray-100 hover:bg-blue-400 text-gray-600 hover:text-white transition-all duration-300"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a
                    href={member.social.github}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-800 text-gray-600 hover:text-white transition-all duration-300"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Culture / Values Section */}
      <motion.section
        className="bg-gray-50 py-20 text-center px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6">Our Culture</h2>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          At EmmaTech, we believe collaboration, creativity, and continuous
          learning are the keys to building exceptional solutions. Our team is
          not just a group of individuals — we are a family united by a shared
          vision of innovation and impact.
        </p>
      </motion.section>

      {/* CTA */}
      <motion.section
        className="py-20 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-12 text-white max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-4">Want to Join Our Team?</h3>
          <p className="text-blue-100 mb-6">
            We're always looking for talented individuals who share our passion
            for technology and innovation. Check out our open positions and
            become part of our journey.
          </p>
          <Link to="/career">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
              View Open Positions
            </button>
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default TeamPage;
