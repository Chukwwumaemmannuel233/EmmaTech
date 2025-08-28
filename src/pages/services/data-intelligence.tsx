// DataIntelligencePage.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BarChart2, Database, PieChart, Eye, Cpu, Cloud, Code } from "lucide-react";

export default function DataIntelligencePage() {
  // Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, duration: 0.6 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const cardHover = {
    whileHover: { scale: 1.05, y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" },
    transition: { duration: 0.3 },
  };

  const iconHover = {
    whileHover: { scale: 1.2 },
    transition: { duration: 0.3 },
  };

  // Features
  const features = [
    {
      icon: <BarChart2 className="w-10 h-10 text-blue-500" />,
      title: "Data Analytics",
      description:
        "We analyze your data to uncover patterns, trends, and correlations that drive smarter decisions. Visual dashboards give you real-time insights for actionable business intelligence.",
      image:
        "https://media.istockphoto.com/id/2197655235/photo/close-up-of-three-people-looking-at-financial-data-with-graphs-and-charts.jpg?s=612x612&w=0&k=20&c=rOX0dS9sbA5EaYkcj-UdjeboXoopcu4-dy6qp0XJy_c=",
    },
    {
      icon: <PieChart className="w-10 h-10 text-green-500" />,
      title: "Predictive Modeling",
      description:
        "Our AI-powered models forecast future trends and customer behavior, helping you anticipate needs, optimize operations, and reduce risks.",
      image:
        "https://media.istockphoto.com/id/2192708909/photo/a-futuristic-digital-interface-with-a-focus-on-the-word-data-science-hands-are-interacting.jpg?s=612x612&w=0&k=20&c=mGM4PfJwxmwT61Oh5Snf3n7aUk0PQ3JIUqQghixifpk=",
    },
    {
      icon: <Database className="w-10 h-10 text-purple-500" />,
      title: "Data Management",
      description:
        "We organize, secure, and maintain your data so that it's accurate, accessible, and ready for analysis. Clean data leads to better decisions.",
      image:
        "https://media.istockphoto.com/id/2178551434/photo/diverse-business-development-team-brainstorming-new-products-and-services-using-a-digital.jpg?s=612x612&w=0&k=20&c=cpZUkdQ2OrDG2KbYOXbcaX6Fcs_t8kEkPELmsPMLrUU=",
    },
    {
      icon: <Eye className="w-10 h-10 text-red-500" />,
      title: "Business Intelligence",
      description:
        "Transform raw data into actionable insights with dashboards, KPIs, and reports that empower your business to act faster and smarter.",
      image:
        "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const processSteps = [
    {
      icon: <Cpu className="w-10 h-10 text-teal-500" />,
      title: "Data Collection",
      description:
        "We gather data from multiple sources including internal databases, cloud platforms, APIs, and IoT devices to create a comprehensive business dataset.",
    },
    {
      icon: <Code className="w-10 h-10 text-purple-500" />,
      title: "Data Processing",
      description:
        "Collected data is cleaned, normalized, and structured using ETL pipelines. Accurate, organized data ensures effective analytics.",
    },
    {
      icon: <PieChart className="w-10 h-10 text-green-500" />,
      title: "Insights & Analytics",
      description:
        "We apply statistical models, AI algorithms, and visualization tools to generate actionable insights for your business strategy.",
    },
    {
      icon: <Cloud className="w-10 h-10 text-blue-500" />,
      title: "Deployment & Monitoring",
      description:
        "Models and dashboards are deployed for real-time monitoring. Continuous analysis ensures that insights remain current and accurate.",
    },
  ];

  const technologies = [
    {
      icon: <img src="https://cdn.worldvectorlogo.com/logos/power-bi.svg" alt="Power BI" className="w-16 h-16 object-contain" />,
      name: "Power BI",
    },
    {
      icon: <img src="https://cdn.worldvectorlogo.com/logos/tableau-software.svg" alt="Tableau" className="w-16 h-16 object-contain" />,
      name: "Tableau",
    },
    {
      icon: <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python" className="w-16 h-16 object-contain" />,
      name: "Python",
    },
    {
      icon: <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" className="w-16 h-16 object-contain" />,
      name: "AWS",
    },
    {
      icon: <Database className="w-10 h-10 text-purple-500" />,
      name: "SQL / NoSQL Databases",
    },
    {
      icon: <Cloud className="w-10 h-10 text-teal-500" />,
      name: "Cloud Data Platforms",
    },
  ];

  const benefits = [
    {
      title: "Make Data-Driven Decisions",
      description:
        "Our analytics solutions give you a clear picture of your business so that every decision is backed by accurate data.",
    },
    {
      title: "Predict & Plan",
      description:
        "Forecast trends, prepare for market changes, and stay ahead of the competition using AI-driven insights.",
    },
    {
      title: "Optimize Operations",
      description:
        "Identify inefficiencies, automate processes, and improve productivity with intelligent data insights.",
    },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={containerVariants}
      className="min-h-screen bg-gray-50"
    >
      {/* Hero Section */}
      <motion.section
        className="relative bg-gradient-to-r from-green-600 via-teal-700 to-green-500 text-white py-24"
        variants={itemVariants}
      >
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold mb-6">
            Data Intelligence & Analytics
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl opacity-95 leading-relaxed mb-8"
          >
            Harness the power of your data to uncover insights, predict trends, and make informed business decisions.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link
              to="/contact"
              className="bg-white text-green-700 font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-100 transition"
            >
              Request a Consultation
            </Link>
          </motion.div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1500&q=80"
          alt="Data Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="py-20 max-w-6xl mx-auto px-6 md:px-20"
        variants={containerVariants}
      >
        <motion.h2
          className="text-3xl font-bold text-gray-900 text-center mb-12"
          variants={itemVariants}
        >
          Our Core Services
        </motion.h2>
        <div className="grid gap-16 sm:grid-cols-2 lg:grid-cols-2 items-center">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow overflow-hidden cursor-pointer"
              variants={itemVariants}
              whileHover={cardHover.whileHover}
            >
              <motion.img
                src={feature.image}
                alt={feature.title}
                className="w-full md:w-1/2 h-64 object-cover"
                whileHover={iconHover.whileHover}
              />
              <div className="p-6 md:w-1/2">
                <motion.div className="flex items-center mb-4" whileHover={iconHover.whileHover}>
                  {feature.icon}
                </motion.div>
                <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section
        className="py-20 max-w-6xl mx-auto px-6 md:px-20"
        variants={containerVariants}
      >
        <motion.h2
          className="text-3xl font-bold text-gray-900 text-center mb-12"
          variants={itemVariants}
        >
          Our Data Intelligence Process
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {processSteps.map((step, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl p-6 shadow text-center cursor-pointer"
              variants={itemVariants}
              whileHover={cardHover.whileHover}
            >
              {step.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        className="py-20 max-w-6xl mx-auto px-6 md:px-20 bg-gray-100 rounded-3xl"
        variants={containerVariants}
      >
        <motion.h2
          className="text-3xl font-bold text-gray-900 text-center mb-12"
          variants={itemVariants}
        >
          Why Choose Us
        </motion.h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl p-6 shadow text-center cursor-pointer"
              variants={itemVariants}
              whileHover={cardHover.whileHover}
            >
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Technologies Section */}
      <motion.section
        className="py-20 max-w-6xl mx-auto px-6 md:px-20"
        variants={containerVariants}
      >
        <motion.h2
          className="text-3xl font-bold text-gray-900 text-center mb-12"
          variants={itemVariants}
        >
          Technologies We Use
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {technologies.map((tech, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl p-6 shadow flex flex-col items-center text-center cursor-pointer"
              variants={itemVariants}
              whileHover={cardHover.whileHover}
            >
              {tech.icon}
              <h3 className="text-lg font-semibold mt-4 mb-2">{tech.name}</h3>
            </motion.div>
          ))}
        </div>
        <motion.p
          className="text-center text-gray-600 mt-6 text-lg"
          variants={itemVariants}
        >
          ...and many more tools to ensure your business is data-driven and intelligent.
        </motion.p>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="bg-gradient-to-r from-green-600 via-teal-700 to-green-500 text-white py-24"
        variants={itemVariants}
      >
        <motion.div
          className="max-w-3xl mx-auto px-6 text-center"
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            variants={itemVariants}
          >
            Ready to Unlock the Power of Your Data?
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto text-lg mb-6 opacity-95"
            variants={itemVariants}
          >
            Connect with our team to implement data intelligence solutions that optimize processes, predict trends, and deliver measurable business outcomes.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link
              to="/contact"
              className="inline-block bg-white text-green-700 font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-100 transition"
            >
              Get Started Today
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>
    </motion.div>
  );
}
