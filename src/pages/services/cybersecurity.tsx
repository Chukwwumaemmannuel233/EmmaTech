// CybersecurityPage.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Lock, AlertTriangle, Server, Cpu, Eye } from "lucide-react";

export default function CybersecurityPage() {
  const services = [
    {
      icon: <Shield className="w-10 h-10 text-blue-500" />,
      title: "Network Security",
      description:
        "Protect your networks from unauthorized access, attacks, and vulnerabilities.",
    },
    {
      icon: <Lock className="w-10 h-10 text-red-500" />,
      title: "Endpoint Security",
      description:
        "Secure devices and endpoints to prevent breaches and malware infections.",
    },
    {
      icon: <AlertTriangle className="w-10 h-10 text-yellow-500" />,
      title: "Threat Analysis",
      description:
        "Identify, assess, and mitigate potential threats before they become attacks.",
    },
    {
      icon: <Server className="w-10 h-10 text-green-500" />,
      title: "Cloud Security",
      description:
        "Protect your cloud infrastructure and applications from unauthorized access.",
    },
  ];

  const processSteps = [
    {
      icon: <Eye className="w-10 h-10 text-blue-500" />,
      title: "Assessment & Audit",
      description:
        "Analyze your current security posture and identify risks and vulnerabilities.",
    },
    {
      icon: <Cpu className="w-10 h-10 text-red-500" />,
      title: "Implementation",
      description:
        "Deploy security solutions and best practices tailored to your organization.",
    },
    {
      icon: <Shield className="w-10 h-10 text-green-500" />,
      title: "Monitoring",
      description:
        "Continuously monitor systems to detect and respond to threats in real-time.",
    },
    {
      icon: <Lock className="w-10 h-10 text-yellow-500" />,
      title: "Incident Response",
      description:
        "Rapidly respond to security incidents and restore normal operations safely.",
    },
  ];

  const tools = [
    { icon: "https://nmap.org/images/sitelogo-2x.png", name: "Nmap" },
    {
      icon: "https://cdn.worldvectorlogo.com/logos/wireshark.svg",
      name: "Wireshark",
    },
    {
      icon: "https://cdn.worldvectorlogo.com/logos/kali-1.svg",
      name: "Kali Linux",
    },
    {
      icon: "https://cdn.worldvectorlogo.com/logos/moto-gp.svg",
      name: "Metasploit",
    },
    {
      icon: "https://cdn.worldvectorlogo.com/logos/nexxus.svg",
      name: "Nessus",
    },
    {
      icon: "https://cdn.worldvectorlogo.com/logos/google-suite-logo.svg",
      name: "Burp Suite",
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
      <section className="relative bg-gradient-to-r from-gray-900 via-blue-900 to-black text-white py-24">
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
            Cybersecurity Services
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl opacity-95 leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            Protect your business from cyber threats with our comprehensive
            security solutions.
          </motion.p>
          <Link
            to="/contact"
            className="bg-white text-blue-900 font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-100 transition"
          >
            Get Started
          </Link>
        </motion.div>
        <img
          src="https://media.istockphoto.com/id/1302423375/photo/close-up-ux-developer-and-ui-designer-use-augmented-reality-app-brainstorming-about-mobile.jpg?s=612x612&w=0&k=20&c=zTr--o-q1Sbq0rGMseiHKWg3JMtHb-SxY3EIjbJNkgE="
          alt="Cybersecurity"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
      </section>

      {/* Insights / Statistics Section */}
      <section className="py-20 max-w-6xl mx-auto px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.img
          src="https://media.istockphoto.com/id/2172249360/photo/ai-artificial-intelligence-concept-cpu-quantum-computing-digital-transformation-and-big-data.jpg?s=612x612&w=0&k=20&c=s9G8qkM5zxuYfARpsdc5Cd_834A-EDlrf5fTZcDo1Hk="
          alt="Cybersecurity Insights"
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
            Cybersecurity Insights & Statistics
          </h2>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            Stay informed with the latest cybersecurity trends and statistics.
            Knowledge is your first line of defense against cyber threats.
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>
              Over 60% of small businesses experience a cyber attack each year.
            </li>
            <li>Ransomware attacks increase by 150% annually.</li>
            <li>
              Businesses with proactive security measures reduce breaches by
              70%.
            </li>
          </ul>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 max-w-6xl mx-auto px-6 md:px-20">
        <motion.h2
          className="text-3xl font-bold text-gray-900 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl p-6 shadow flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              {service.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 max-w-6xl mx-auto px-6 md:px-20">
        <motion.h2
          className="text-3xl font-bold text-gray-900 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Security Process
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {processSteps.map((step, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl p-6 shadow text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
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

      {/* Real-life Scenario / Case Studies */}
      <section className="py-20 max-w-6xl mx-auto px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.img
          src="https://media.istockphoto.com/id/824200892/photo/diagram-of-security.jpg?s=612x612&w=0&k=20&c=NL9Q3sSmVwgQ4N-sLfWreC8magBk30yZJw11BYFwO-M="
          alt="Cybersecurity in Action"
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
            Real-life Threat Prevention
          </h2>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            We help businesses detect and prevent cyber attacks in real-time,
            securing sensitive data and critical systems from breaches.
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Active threat monitoring</li>
            <li>Incident response simulations</li>
            <li>Data protection & compliance</li>
          </ul>
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 max-w-6xl mx-auto px-6 md:px-20 bg-gray-100 rounded-2xl">
        <motion.h2
          className="text-3xl font-bold text-gray-900 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Why Choose Us
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
          <motion.div
            className="bg-white rounded-2xl p-6 shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
            <p className="text-gray-600">
              Certified cybersecurity professionals with years of experience
              defending organizations.
            </p>
          </motion.div>
          <motion.div
            className="bg-white rounded-2xl p-6 shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-2">Advanced Tools</h3>
            <p className="text-gray-600">
              Using industry-leading tools and technologies for maximum
              protection and efficiency.
            </p>
          </motion.div>
          <motion.div
            className="bg-white rounded-2xl p-6 shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">
              Continuous monitoring and support to ensure your business stays
              secure at all times.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 max-w-6xl mx-auto px-6 md:px-20">
        <motion.h2
          className="text-3xl font-bold text-gray-900 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Key Tools & Technologies
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {tools.map((tool, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl p-6 shadow flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <img
                src={tool.icon}
                alt={tool.name}
                className="w-16 h-16 object-contain"
              />
              <h3 className="text-lg font-semibold mt-4 mb-2">{tool.name}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-gray-900 via-blue-900 to-black text-white py-24">
        <motion.div
          className="max-w-3xl mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Secure Your Business Today
          </h2>
          <p className="max-w-2xl mx-auto text-lg mb-6 opacity-95">
            Partner with us to protect your digital assets, detect threats
            early, and respond effectively.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-900 font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-100 transition"
          >
            Contact Us
          </Link>
        </motion.div>
      </section>
    </motion.div>
  );
}
