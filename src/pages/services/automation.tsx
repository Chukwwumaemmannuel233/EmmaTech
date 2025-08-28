// AutomationPage.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Zap,
  Cpu,
  Monitor,
  Workflow,
  ShieldCheck,
  Target,
  Cloud,
  Code,
} from "lucide-react";

export default function AutomationPage() {
  const features = [
    {
      icon: <Workflow className="w-10 h-10 text-green-500" />,
      title: "Process Automation",
      description:
        "Automate repetitive workflows to save time, reduce errors, and increase productivity.",
    },
    {
      icon: <Zap className="w-10 h-10 text-yellow-500" />,
      title: "Intelligent Automation",
      description:
        "Leverage AI and smart algorithms to make processes adaptive and self-improving.",
    },
    {
      icon: <Monitor className="w-10 h-10 text-purple-500" />,
      title: "Cross-Platform Integration",
      description:
        "Integrate automation across web, mobile, and desktop systems seamlessly.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-red-500" />,
      title: "Secure & Compliant",
      description:
        "Ensure your automated processes are safe, auditable, and compliant with standards.",
    },
  ];

  const processSteps = [
    {
      icon: <Target className="w-10 h-10 text-blue-500" />,
      title: "Discovery & Analysis",
      description:
        "Understand your business workflows, identify bottlenecks, and define automation goals.",
    },
    {
      icon: <Code className="w-10 h-10 text-purple-500" />,
      title: "Solution Design",
      description:
        "Design automation logic, workflows, and integrations tailored to your needs.",
    },
    {
      icon: <Cpu className="w-10 h-10 text-green-500" />,
      title: "Implementation & Testing",
      description:
        "Develop, test, and optimize automation scripts, bots, and workflows.",
    },
    {
      icon: <Zap className="w-10 h-10 text-yellow-500" />,
      title: "Deployment & Monitoring",
      description:
        "Deploy automation and monitor performance, ensuring continuous improvement.",
    },
  ];

  const technologies = [
    {
      icon: (
        <img
          src="https://cdn.worldvectorlogo.com/logos/uipath-2.svg"
          alt="UiPath"
          className="w-16 h-16 object-contain"
        />
      ),
      name: "UiPath",
    },
    {
      icon: (
        <img
          src="https://cdn.worldvectorlogo.com/logos/aol-anywhere.svg"
          alt="Automation Anywhere"
          className="w-16 h-16 object-contain"
        />
      ),
      name: "Automation Anywhere",
    },
    {
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
          alt="Python"
          className="w-16 h-16 object-contain"
        />
      ),
      name: "Python",
    },
    {
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
          alt="AWS"
          className="w-16 h-16 object-contain"
        />
      ),
      name: "AWS",
    },
    {
      icon: (
        <img
          src="https://cdn.worldvectorlogo.com/logos/zapier.svg"
          alt="Zapier"
          className="w-16 h-16 object-contain"
        />
      ),
      name: "Zapier",
    },
    {
      icon: <Cloud className="w-10 h-10 text-teal-500" />,
      name: "Cloud Automation",
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
            Intelligent Process Automation
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl opacity-95 leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            Streamline your business operations with cutting-edge automation
            solutions designed for efficiency, accuracy, and scalability.
          </motion.p>
          <Link
            to="/contact"
            className="bg-white text-indigo-700 font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-100 transition"
          >
            Automate Your Workflow
          </Link>
        </motion.div>
        <img
          src="https://images.unsplash.com/photo-1581093458363-08190b347f85?auto=format&fit=crop&w=1500&q=80"
          alt="Automation Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
      </section>

      {/* How We Automate */}
      <section className="py-20 max-w-6xl mx-auto px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.img
          src="https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?auto=format&fit=crop&w=1200&q=80"
          alt="Team Automating"
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
            How We Automate Processes
          </h2>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            Our automation approach analyzes your workflows and applies
            intelligent solutions that reduce manual effort and optimize
            operations. We focus on integration, efficiency, and measurable
            outcomes.
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Workflow Analysis & Optimization</li>
            <li>Intelligent Script Design</li>
            <li>Integration with Existing Systems</li>
            <li>Monitoring & Continuous Improvement</li>
          </ul>
        </motion.div>
      </section>

      {/* Additional Image/Text Section */}
      <section className="py-20 max-w-6xl mx-auto px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Scalable & Adaptive Automation
          </h2>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            Our automation solutions are built to scale with your business. As
            your processes grow, our systems adapt seamlessly to handle more
            complexity without breaking workflows.
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Cloud-native Automation</li>
            <li>Adaptive AI Workflows</li>
            <li>Seamless Integration Across Platforms</li>
          </ul>
        </motion.div>
        <motion.img
          src="https://media.istockphoto.com/id/2208462466/photo/a-person-is-using-a-mobile-digital-interface-highlighting-automation-efficiency-streamlining.jpg?s=612x612&w=0&k=20&c=qht6oWRR9wvCr2hVKWhzUCj8unqx9qD6BLtLliqwkxU="
          alt="Scalable Automation"
          className="w-full rounded-2xl shadow-lg object-cover h-96"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        />
      </section>

      {/* Development Process */}
      <section className="py-20 max-w-6xl mx-auto px-6 md:px-20">
        <motion.h2
          className="text-3xl font-bold text-gray-900 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Automation Process
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
          Key Automation Features
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

      {/* Technologies Section */}
      <section className="py-20 max-w-6xl mx-auto px-6 md:px-20">
        <motion.h2
          className="text-3xl font-bold text-gray-900 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Technologies We Use for Automation
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
          ...and many more automation tools depending on your business needs.
        </p>
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
            Ready to Automate Your Business?
          </h2>
          <p className="max-w-2xl mx-auto text-lg mb-6 opacity-95">
            Let’s collaborate to implement intelligent automation solutions that
            optimize processes and drive measurable results.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-indigo-700 font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-100 transition"
          >
            Get Started
          </Link>
        </motion.div>
      </section>
    </motion.div>
  );
}
