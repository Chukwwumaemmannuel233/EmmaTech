// import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Code2, Cloud, Smartphone, Layout, Github, Settings, Users } from "lucide-react";

export default function DocumentationPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 via-purple-700 to-indigo-500 text-white py-28 px-6 text-center overflow-hidden">
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Company Documentation
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto"
        >
          Learn about our workflow, services, team coordination, technologies, and best practices.  
          Everything you need to understand how we deliver innovative solutions from start to finish.
        </motion.p>
        <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
          <Link
            to="/support"
            className="bg-emerald-500 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-emerald-600 transition-colors"
          >
            Contact Support
          </Link>
        </motion.div>

        <motion.img
          src="https://images.unsplash.com/photo-1605902711622-cfb43c44322e?auto=format&fit=crop&w=600&q=80"
          alt="Documentation Illustration"
          className="absolute right-0 bottom-0 w-64 md:w-96 opacity-30"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.3 }}
          transition={{ duration: 1 }}
        />
      </section>

      {/* Workflow Section */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-12 text-gray-900 text-center"
        >
          Our Workflow
        </motion.h2>
        <div className="grid md:grid-cols-4 gap-12">
          <motion.div whileHover={{ scale: 1.03 }} className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <Code2 className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h4 className="font-semibold text-xl mb-2">Planning</h4>
            <p className="text-gray-600 text-sm">
              Gathering requirements, defining project scope, and creating a roadmap for success.
            </p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <Layout className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h4 className="font-semibold text-xl mb-2">Design</h4>
            <p className="text-gray-600 text-sm">
              Creating prototypes, wireframes, and high-fidelity designs to ensure a great user experience.
            </p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <Smartphone className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h4 className="font-semibold text-xl mb-2">Development</h4>
            <p className="text-gray-600 text-sm">
              Building web and mobile applications using modern technologies and best coding practices.
            </p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <Users className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h4 className="font-semibold text-xl mb-2">Team Coordination</h4>
            <p className="text-gray-600 text-sm">
              Agile workflows, daily stand-ups, and collaborative tools ensure smooth communication and delivery.
            </p>
          </motion.div>
        </div>
      </section>

       <section className="py-24 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold mb-12 text-gray-900"
          >
            Our Services
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div whileHover={{ scale: 1.03 }} className="bg-white p-8 rounded-2xl shadow-lg">
              <h4 className="font-semibold mb-2 text-lg">Web Development</h4>
              <p className="text-gray-600 text-sm">
                Custom websites with responsive design and modern frameworks.
              </p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} className="bg-white p-8 rounded-2xl shadow-lg">
              <h4 className="font-semibold mb-2 text-lg">Mobile Apps</h4>
              <p className="text-gray-600 text-sm">
                Cross-platform mobile applications for Android and iOS devices.
              </p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} className="bg-white p-8 rounded-2xl shadow-lg">
              <h4 className="font-semibold mb-2 text-lg">Cloud Solutions</h4>
              <p className="text-gray-600 text-sm">
                Scalable and secure cloud-based solutions for your business needs.
              </p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} className="bg-white p-8 rounded-2xl shadow-lg">
              <h4 className="font-semibold mb-2 text-lg">UI/UX Design</h4>
              <p className="text-gray-600 text-sm">
                Beautiful and intuitive interfaces designed for your users.
              </p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} className="bg-white p-8 rounded-2xl shadow-lg">
              <h4 className="font-semibold mb-2 text-lg">DevOps & Consulting</h4>
              <p className="text-gray-600 text-sm">
                Deployment, monitoring, and expert guidance for efficient processes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 bg-gray-100">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-12 text-gray-900 text-center"
        >
          Technologies We Use
        </motion.h2>
        <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto text-center">
          {[
            { name: "React", src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
            { name: "React Native", src: "https://cdn.worldvectorlogo.com/logos/react-native-1.svg" },
            { name: "Next.js", src: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" },
            { name: "TypeScript", src: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" },
            { name: "Tailwind CSS", src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
            { name: "Node.js", src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
            { name: "Docker", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Docker_%28container_engine%29_logo.svg/915px-Docker_%28container_engine%29_logo.svg.png" },
            { name: "Figma", src: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
            { name: "Python", src: "https://cdn.worldvectorlogo.com/logos/python-5.svg" },
            { name: "AWS", src: "https://cdn.worldvectorlogo.com/logos/amazon-web-services-1.svg" },
          ].map((tech, index) => (
            <div key={index} className="p-6 bg-white rounded-2xl shadow-lg">
              <img src={tech.src} alt={tech.name} className="mx-auto h-16 mb-2" />
              <p className="text-gray-700 font-semibold">{tech.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-12 text-gray-900 text-center"
        >
          Case Studies
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div whileHover={{ scale: 1.03 }} className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <img
              src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Project 1"
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-left">
              <h4 className="font-semibold text-lg mb-2">E-Commerce Platform</h4>
              <p className="text-gray-600 text-sm">
                Scalable online store with payment integrations and analytics.
              </p>
            </div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwYXBwJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D"
              alt="Project 2"
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-left">
              <h4 className="font-semibold text-lg mb-2">Mobile App Development</h4>
              <p className="text-gray-600 text-sm">
                Cross-platform app built with React Native, focused on performance and UX.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-indigo-50">
        <motion.h2
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-12 text-gray-900 text-center"
        >
          About TechFlow
        </motion.h2>
        <div className="md:flex md:items-center md:gap-12 max-w-6xl mx-auto px-6">
          <motion.img
            src="https://media.istockphoto.com/id/1189827740/photo/a-businessman-arranges-wooden-jigsaw-blocks-one-on-top-of-the-other-with-the-words-past.jpg?s=612x612&w=0&k=20&c=goB2-XlcgR7_bjVOKwL1U91fpAhmI4Jcy1x-efBz_ls="
            alt="Company History"
            className="md:w-1/2 rounded-2xl mb-6 md:mb-0 shadow-lg"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-gray-700 mb-4">
              Founded in 2015, TechFlow has grown from a small startup to a leading tech solutions provider. 
              Our mission is to deliver innovative and scalable software solutions that help businesses thrive.
            </p>
            <p className="text-gray-700">
              Over the years, we have expanded our services to include web and mobile development, cloud solutions, and AI integrations. 
              Our team of experts combines creativity, technology, and strategy to provide the best results for our clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="py-24 bg-gray-50">
        <motion.h2
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-12 text-gray-900 text-center"
        >
          Best Practices
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div whileHover={{ scale: 1.03 }} className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <Settings className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h4 className="font-semibold mb-2 text-lg">Code Quality</h4>
            <p className="text-gray-600 text-sm">Maintain clean, readable, and modular code throughout projects.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <Github className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h4 className="font-semibold mb-2 text-lg">Version Control</h4>
            <p className="text-gray-600 text-sm">Use Git and GitHub for collaboration, branching, and deployments.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <Cloud className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h4 className="font-semibold mb-2 text-lg">Deployment</h4>
            <p className="text-gray-600 text-sm">Automated CI/CD pipelines for fast, reliable releases.</p>
          </motion.div>
        </div>
      </section>

         {/* Resources / Guides */}
       <section className="py-24 bg-gray-100">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-12 text-gray-900 text-center"
        >
          Guides & Resources
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {[
            { title: "Getting Started with TechFlow", img: "https://plus.unsplash.com/premium_photo-1724628171742-6b9133410603?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8R2V0dGluZyUyMFN0YXJ0ZWQlMjB3aXRoJTIwVGVjaHxlbnwwfHwwfHx8MA%3D%3D" },
            { title: "Design System Overview", img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D" },
            { title: "API Integration Guide", img: "https://media.istockphoto.com/id/1424877356/photo/woman-use-laptop-with-api-word-on-vr-screen-and-multimedia-icons.jpg?s=612x612&w=0&k=20&c=0kWh3PCHaM3HNmDxmMCINB0cVDN_6q7j0Mh2CP4hKHI=" },
          ].map((resource, index) => (
            <motion.div key={index} whileHover={{ scale: 1.03 }} className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <img src={resource.img} alt={resource.title} className="mx-auto h-32 mb-4 rounded-xl" />
              <h4 className="font-semibold text-gray-700">{resource.title}</h4>
            </motion.div>
          ))}
        </div>
      </section>


      {/* Contact Section */}
      <section className="py-24 max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-6 text-gray-900"
        >
          Contact & Support
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-700 mb-10 max-w-2xl mx-auto"
        >
          Questions about our workflow, projects, or technology? Reach out via any of the channels below.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
          <motion.div whileHover={{ scale: 1.03 }} className="bg-white p-6 rounded-xl shadow-md">
            <h4 className="font-semibold mb-2">Email</h4>
            <p className="text-gray-600">support@techflow.com</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} className="bg-white p-6 rounded-xl shadow-md">
            <h4 className="font-semibold mb-2">Phone</h4>
            <p className="text-gray-600">+234 801 234 5678</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} className="bg-white p-6 rounded-xl shadow-md">
            <h4 className="font-semibold mb-2">Office</h4>
            <p className="text-gray-600">Lagos, Nigeria</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}