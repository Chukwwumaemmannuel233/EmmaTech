// ManagedITServicesPage.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Server,
  ShieldCheck,
  Wifi,
  Cpu,
  Database,
  Zap,
  Target,
  Monitor,
} from "lucide-react";

export default function ManagedITServicesPage() {
  const services = [
    {
      icon: <Server className="w-10 h-10 text-blue-500" />,
      title: "Network Management",
      description:
        "We monitor, maintain, and optimize your network for high performance, security, and reliability.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-red-500" />,
      title: "Cybersecurity",
      description:
        "Protect your systems with proactive threat monitoring, vulnerability assessments, and incident response.",
    },
    {
      icon: <Wifi className="w-10 h-10 text-green-500" />,
      title: "Cloud Solutions",
      description:
        "Manage cloud infrastructure, migrate systems, and optimize for flexibility and scalability.",
    },
    {
      icon: <Cpu className="w-10 h-10 text-teal-500" />,
      title: "Infrastructure Management",
      description:
        "Maintain and upgrade your hardware, servers, and software for smooth operations and minimal downtime.",
    },
  ];

  const processSteps = [
    {
      icon: <Target className="w-10 h-10 text-blue-500" />,
      title: "Assessment & Planning",
      description:
        "We evaluate your current IT infrastructure and define a strategy aligned with your business goals.",
    },
    {
      icon: <Monitor className="w-10 h-10 text-green-500" />,
      title: "Implementation",
      description:
        "Deploy and configure the necessary hardware, software, and cloud services efficiently.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-red-500" />,
      title: "Monitoring & Security",
      description:
        "Continuous monitoring and proactive security measures to ensure safety and uptime.",
    },
    {
      icon: <Zap className="w-10 h-10 text-yellow-500" />,
      title: "Maintenance & Support",
      description:
        "Ongoing management, updates, and technical support to keep your IT environment smooth.",
    },
  ];

  const technologies = [
    {
      icon: (
        <img
          src="https://cdn.worldvectorlogo.com/logos/microsoft-azure-2.svg"
          className="w-16 h-16 object-contain"
        />
      ),
      name: "Microsoft Azure",
    },
    {
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
          className="w-16 h-16 object-contain"
        />
      ),
      name: "AWS",
    },
    {
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
          className="w-16 h-16 object-contain"
        />
      ),
      name: "Python Automation",
    },
    {
      icon: (
        <img
          src="https://cdn.worldvectorlogo.com/logos/docker.svg"
          className="w-16 h-16 object-contain"
        />
      ),
      name: "Docker",
    },
    {
      icon: (
        <img
          src="https://cdn.worldvectorlogo.com/logos/kubernets.svg"
          className="w-16 h-16 object-contain"
        />
      ),
      name: "Kubernetes",
    },
    {
      icon: <Database className="w-10 h-10 text-purple-500" />,
      name: "SQL Databases",
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
      <section className="relative bg-gradient-to-r from-blue-600 via-indigo-700 to-blue-500 text-white py-24">
        <motion.div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.h1 className="text-4xl md:text-6xl font-bold mb-6">
            Managed IT Services
          </motion.h1>
          <motion.p className="text-lg md:text-xl opacity-95 leading-relaxed mb-8">
            We manage your IT infrastructure so you can focus on growing your
            business. From network management to cloud solutions, we provide
            comprehensive support.
          </motion.p>
          <Link
            to="/contact"
            className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-100 transition"
          >
            Get Started
          </Link>
        </motion.div>
        {/* Hero Image */}
        <img
          src="https://media.istockphoto.com/id/1362372021/photo/woman-holding-ar-device-panel-and-analyzing-system-in-server-room.jpg?s=612x612&w=0&k=20&c=ilEH45EFFxdkL4PXpEhHzgC6tdTfITuIvD6X85aRhUQ="
          alt="IT Services"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
      </section>

      {/* How We Manage IT */}
      <section className="py-20 max-w-6xl mx-auto px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.img
          src="https://media.istockphoto.com/id/2162645329/photo/teamwork-meeting-and-ideas-for-solution-or-decision-for-business-workplace-or-company-group.jpg?s=612x612&w=0&k=20&c=GTm_8uuh-QYmJQrWh2eNiQxVxaw-Vq7tN36GtjH44hc="
          alt="IT Team"
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
            How We Manage IT
          </h2>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            Our managed IT services include network management, cybersecurity,
            cloud solutions, and infrastructure maintenance. We ensure your
            systems run smoothly and securely.
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Network Monitoring & Optimization</li>
            <li>Cybersecurity & Threat Management</li>
            <li>Cloud Migration & Management</li>
            <li>Hardware & Software Maintenance</li>
          </ul>
        </motion.div>
      </section>

      {/* Process Section */}
      <section className="py-20 max-w-6xl mx-auto px-6 md:px-20">
        <motion.h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Our Process
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {processSteps.map((step, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl p-6 shadow text-center cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              {step.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 md:px-20">
        <motion.h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Our Services
        </motion.h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl p-6 shadow flex flex-col items-center text-center cursor-pointer hover:scale-105 transition-transform duration-300"
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

      {/* Approach Sections */}
      <section className="py-20 max-w-6xl mx-auto px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.img
          src="https://media.istockphoto.com/id/157334670/photo/database.jpg?s=612x612&w=0&k=20&c=Q_tLkUblxVW9qPdsG_V0Dsj0h-YBbG2r6Ofojzm9r74="
          alt="IT Workflow"
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
            Proactive & Reliable Approach
          </h2>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            We anticipate problems before they arise. Our proactive approach
            ensures system uptime, security, and optimized IT performance.
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>24/7 System Monitoring</li>
            <li>Security & Compliance Checks</li>
            <li>Scheduled Maintenance & Updates</li>
          </ul>
        </motion.div>
      </section>

      <section className="py-20 max-w-6xl mx-auto px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Scalable & Future-Proof IT
          </h2>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            Our solutions are designed to grow with your business. We leverage
            modern IT architecture and cloud technologies for scalable and
            future-proof systems.
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Cloud-first Strategy</li>
            <li>Modular Infrastructure</li>
            <li>Automation & Efficiency</li>
          </ul>
        </motion.div>
        <motion.img
          src="https://media.istockphoto.com/id/1287244680/photo/legal-advice-online-labor-law-concept-layer-or-notary-working.jpg?s=612x612&w=0&k=20&c=mc7h0c--Xerp6JEITFLN94kCp_P-KO_nAAq3MiC7W0Y="
          alt="Scalable IT"
          className="w-full rounded-2xl shadow-lg object-cover h-96"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        />
      </section>

      {/* Technologies */}
      <section className="py-20 max-w-6xl mx-auto px-6 md:px-20">
        <motion.h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Key Technologies We Use
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {technologies.map((tech, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl p-6 shadow flex flex-col items-center text-center cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              {tech.icon}
              <h3 className="text-lg font-semibold mt-4 mb-2">{tech.name}</h3>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-gray-600 mt-6 text-lg">
          ...and many more depending on your business needs.
        </p>
      </section>

      {/* Full Image Overlay */}
      <section className="relative py-32">
        <img
          src="https://media.istockphoto.com/id/2156387160/photo/hispanic-latin-american-couple-software-engineer-developer-use-computer-work-on-program.jpg?s=612x612&w=0&k=20&c=4MLKAJBBRdiPbhBfIWV4-raQzm5ssvi-Pi4-G8km_dU="
          alt="Innovation in IT"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.div
          className="relative z-10 max-w-4xl mx-auto text-center text-white px-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
            We Deliver Reliable IT Solutions
          </h2>
          <p className="text-lg md:text-xl leading-relaxed drop-shadow-md">
            From startups to enterprises, we manage IT systems that are secure,
            scalable, and optimized for growth.
          </p>
        </motion.div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-700 to-blue-500 text-white py-24">
        <motion.div
          className="max-w-3xl mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Let Us Manage Your IT?
          </h2>
          <p className="max-w-2xl mx-auto text-lg mb-6 opacity-95">
            Partner with us for complete IT management and focus on growing your
            business while we handle the technology.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-100 transition"
          >
            Contact Us
          </Link>
        </motion.div>
      </section>
    </motion.div>
  );
}
