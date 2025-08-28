// SoftwareDevelopmentPage.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Code,
  Monitor,
  Workflow,
  ShieldCheck,
  Zap,
  Target,
  Cpu,
  Cloud,
  Database,
} from "lucide-react";

export default function SoftwareDevelopmentPage() {
  const features = [
    {
      icon: <Code className="w-10 h-10 text-blue-500" />,
      title: "Custom Web Apps",
      description:
        "Tailored web applications using modern frameworks to match your business requirements.",
    },
    {
      icon: <Workflow className="w-10 h-10 text-green-500" />,
      title: "Workflow Automation",
      description:
        "Automate repetitive tasks to save time, reduce errors, and improve efficiency.",
    },
    {
      icon: <Monitor className="w-10 h-10 text-purple-500" />,
      title: "Cross-Platform Development",
      description:
        "Build apps that work seamlessly on web, desktop, and mobile platforms.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-red-500" />,
      title: "Secure & Reliable",
      description:
        "Follow best practices for cybersecurity to ensure your applications are safe and robust.",
    },
  ];

  const processSteps = [
    {
      icon: <Target className="w-10 h-10 text-blue-500" />,
      title: "Planning & Discovery",
      description:
        "Understanding your goals, gathering requirements, and defining scope.",
    },
    {
      icon: <Monitor className="w-10 h-10 text-green-500" />,
      title: "Design & Prototyping",
      description:
        "Creating wireframes, mockups, and prototypes that match your vision.",
    },
    {
      icon: <Code className="w-10 h-10 text-purple-500" />,
      title: "Development & Testing",
      description:
        "Building scalable and secure solutions with modern technologies and agile practices.",
    },
    {
      icon: <Zap className="w-10 h-10 text-yellow-500" />,
      title: "Deployment & Support",
      description:
        "Seamless deployment, maintenance, and continuous improvement.",
    },
  ];

  const technologies = [
    {
      icon: <Code className="w-10 h-10 text-indigo-500" />,
      name: "React & Next.js",
    },
    {
      icon: <Code className="w-10 h-10 text-green-600" />,
      name: "Node.js & Express",
    },
    {
      icon: <Database className="w-10 h-10 text-orange-500" />,
      name: "SQL & NoSQL Databases",
    },
    {
      icon: <Cpu className="w-10 h-10 text-blue-400" />,
      name: "Python & Django",
    },
    {
      icon: <Cloud className="w-10 h-10 text-teal-500" />,
      name: "AWS & Cloud Services",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-red-500" />,
      name: "Docker & Kubernetes",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50"
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 via-purple-700 to-indigo-500 text-white py-24">
        <motion.div
          className="max-w-5xl mx-auto px-6 text-center relative z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Professional Software Development
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl opacity-95 leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            We create software solutions tailored to your business, combining
            cutting-edge technology, robust processes, and a passion for
            excellence.
          </motion.p>
          <Link
            to="/contact"
            className="bg-white text-indigo-700 font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-100 transition"
          >
            Start Your Project
          </Link>
        </motion.div>
        <img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1500&q=80"
          alt="Software Development Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
      </section>

      {/* How We Build Software */}
      <section className="py-20 max-w-6xl mx-auto px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
          alt="Team Collaboration"
          className="w-full rounded-2xl shadow-lg object-cover h-96 relative"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        />
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How We Build Software
          </h2>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            Our software development process is structured yet flexible. We
            analyze your business needs, design intuitive user experiences,
            develop with modern technologies, and rigorously test each solution.
            Our goal is to deliver software that is scalable, secure, and
            impactful.
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Requirement Analysis & Planning</li>
            <li>Wireframing & UI/UX Design</li>
            <li>Agile Development & Testing</li>
            <li>Deployment, Monitoring & Maintenance</li>
          </ul>
        </motion.div>
      </section>

      {/* Development Process */}
      <section className="py-20 max-w-6xl mx-auto px-6 md:px-20">
        <motion.h2
          className="text-3xl font-bold text-gray-900 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Development Process
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {processSteps.map((step, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl p-6 shadow text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              {step.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-6 md:px-20">
        <motion.h2
          className="text-3xl font-bold text-gray-900 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Key Features
        </motion.h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl p-6 shadow flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Approach Section - Image Left / Text Right */}
      <section className="py-20 max-w-6xl mx-auto px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.img
          src="https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?auto=format&fit=crop&w=1200&q=80"
          alt="Agile Development"
          className="w-full rounded-2xl shadow-lg object-cover h-96"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        />
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Agile & Iterative Approach
          </h2>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            We don’t just deliver software, we deliver value incrementally.
            Using agile methodologies, our team ensures faster releases,
            continuous feedback, and flexibility to adapt to your evolving
            business needs.
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Sprint-based delivery cycles</li>
            <li>Continuous integration & deployment</li>
            <li>Transparent communication & reporting</li>
          </ul>
        </motion.div>
      </section>

      {/* Approach Section - Text Left / Image Right */}
      <section className="py-20 max-w-6xl mx-auto px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Scalable & Future-Proof Solutions
          </h2>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            Technology evolves quickly — and so should your software. We design
            and develop systems that scale with your business and stay relevant
            with modern frameworks, cloud architecture, and best practices.
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Cloud-native development</li>
            <li>Microservices architecture</li>
            <li>Modular, reusable components</li>
          </ul>
        </motion.div>
        <motion.img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
          alt="Scalable Software"
          className="w-full rounded-2xl shadow-lg object-cover h-96"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        />
      </section>

      {/* Key Technologies */}
      <section className="py-20 max-w-6xl mx-auto px-6 md:px-20">
        <motion.h2
          className="text-3xl font-bold text-gray-900 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Key Technologies We Use
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {technologies.map((tech, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl p-6 shadow flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              {tech.icon}
              <h3 className="text-lg font-semibold mt-4 mb-2">{tech.name}</h3>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-gray-600 mt-6 text-lg">
          ...and many more, depending on your business needs.
        </p>
      </section>

      {/* Full Image With Overlay Text */}
      <section className="relative py-32">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1600&q=80"
          alt="Innovation in Software"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <motion.div
          className="relative z-10 max-w-4xl mx-auto text-center text-white px-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
            We Build Software That Powers Innovation
          </h2>
          <p className="text-lg md:text-xl leading-relaxed drop-shadow-md">
            From startups to enterprises, we help businesses embrace digital
            transformation by building solutions that are intuitive, scalable,
            and impactful.
          </p>
        </motion.div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-700 to-indigo-500 text-white py-24">
        <motion.div
          className="max-w-3xl mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Your Custom Software?
          </h2>
          <p className="max-w-2xl mx-auto text-lg mb-6 opacity-95">
            Let’s collaborate to create innovative software solutions that drive
            results and improve your business processes.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-indigo-700 font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-100 transition"
          >
            Contact Us
          </Link>
        </motion.div>
      </section>
    </motion.div>
  );
}
