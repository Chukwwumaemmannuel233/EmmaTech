// import React from "react";
import { motion } from "framer-motion";
// import { Briefcase, BarChart, CheckCircle } from "lucide-react";

const caseStudies = [
  {
    title: "Website Redesign for ABC Corp",
    problem: "ABC Corp's website was outdated, slow, and not mobile-friendly.",
    solution: "We redesigned the website using React, Tailwind CSS, and optimized performance. The new design is fully responsive and modern.",
    result: "Website traffic increased by 60%, bounce rate decreased by 35%, and user engagement improved significantly.",
    image: "https://images.unsplash.com/photo-1605902711622-3fbb9e4bca92?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Mobile App Optimization for XYZ Ltd",
    problem: "XYZ Ltd's mobile app was crashing frequently and had poor performance.",
    solution: "We optimized the app using React Native, implemented better state management, and fixed key bugs.",
    result: "App stability improved to 99.9%, and app store ratings increased from 3.2 to 4.8 stars.",
    image: "https://images.unsplash.com/photo-1581090700227-59aa3de0f3ee?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "E-commerce Platform Migration",
    problem: "The old e-commerce system was slow and lacked advanced analytics.",
    solution: "We migrated the platform to Next.js with integrated analytics and enhanced security features.",
    result: "Checkout completion rate improved by 40% and site performance doubled.",
    image: "https://images.unsplash.com/photo-1590608897129-79bc9e7e3ee1?auto=format&fit=crop&w=600&q=80",
  },
];

export default function CaseStudyPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-700 to-indigo-500 text-white py-20 text-center">
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Case Studies
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl max-w-2xl mx-auto opacity-90"
        >
          Discover how we solve complex problems and deliver results for our clients.
        </motion.p>
      </section>

      {/* Case Study List */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row items-center gap-6 hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={study.image}
                alt={study.title}
                className="w-32 h-32 object-cover rounded-lg shadow-md"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-xl mb-2">{study.title}</h3>
                <p className="text-gray-600 mb-1"><strong>Problem:</strong> {study.problem}</p>
                <p className="text-gray-600 mb-1"><strong>Solution:</strong> {study.solution}</p>
                <p className="text-gray-600"><strong>Result:</strong> {study.result}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact / Support Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-700 to-indigo-500 text-white text-center">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-6"
        >
          Want to Discuss Your Project?
        </motion.h2>
        <p className="mb-6 max-w-xl mx-auto">
          Contact our team to see how we can solve your challenges and deliver results tailored to your needs.
        </p>
        <a
          href="/support"
          className="inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300"
        >
          Contact Support
        </a>
      </section>
    </div>
  );
}
