// import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Database, Key, AlertCircle } from "lucide-react";

const securityMeasures = [
  {
    title: "Encryption",
    description:
      "All user data is encrypted in transit (TLS/HTTPS) and at rest using AES-256 standards to ensure maximum protection.",
    icon: Lock,
    image: "https://images.unsplash.com/photo-1605902711622-8a0b65e3f1da?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Data Storage & Backup",
    description:
      "Data is stored in secure servers with regular backups. Redundant systems ensure high availability and data integrity.",
    icon: Database,
    image: "https://images.unsplash.com/photo-1581090700227-0a1b59f69edc?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Access Control",
    description:
      "Strict access control is enforced internally. Multi-factor authentication (MFA) is required for all administrative access.",
    icon: Key,
    image: "https://images.unsplash.com/photo-1605902711622-3fbb9e4bca92?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Threat Monitoring",
    description:
      "Continuous monitoring for unusual activity and potential threats. Rapid response procedures are in place to mitigate risks.",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1605902711622-6c57b5b81d1c?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Incident Handling",
    description:
      "If a security incident occurs, we immediately assess, contain, and resolve the issue. Users are notified promptly with recommended actions.",
    icon: AlertCircle,
    image: "https://images.unsplash.com/photo-1581092334129-3d8c2d54d7c1?auto=format&fit=crop&w=600&q=80",
  },
];

export default function SecurityPage() {
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
          Security & Privacy
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl max-w-2xl mx-auto opacity-90"
        >
          We prioritize the security and privacy of our users. Learn about the measures we take to protect your data and maintain system integrity.
        </motion.p>
        <motion.img
          src="https://images.unsplash.com/photo-1581092334129-3d8c2d54d7c1?auto=format&fit=crop&w=800&q=80"
          alt="Security Illustration"
          className="mt-8 mx-auto rounded-xl shadow-lg w-96 opacity-80"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </section>

      {/* Security Measures Section */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-12 text-gray-900 text-center"
        >
          How We Protect Your Data
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {securityMeasures.map((measure, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row items-center gap-6"
            >
              <measure.icon className="h-12 w-12 text-indigo-600" />
              <div className="flex-1">
                <h3 className="font-semibold text-xl mb-2">{measure.title}</h3>
                <p className="text-gray-600">{measure.description}</p>
              </div>
              <img
                src={measure.image}
                alt={measure.title}
                className="w-32 h-20 object-cover rounded-lg shadow-md"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-6 text-gray-900"
        >
          Compliance & Standards
        </motion.h2>
        <p className="text-gray-700 mb-4">
          We adhere to industry best practices and compliance standards including GDPR, ISO 27001, and SOC2. Regular audits ensure we maintain security integrity.
        </p>
        <img
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=600&q=80"
          alt="Compliance Illustration"
          className="mt-6 mx-auto rounded-xl shadow-lg w-96"
        />
      </section>

      {/* User Security Tips Section */}
      <section className="py-20 max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-6 text-gray-900"
        >
          Tips for Users
        </motion.h2>
        <p className="text-gray-700 mb-4">
          Use strong, unique passwords for all accounts and enable multi-factor authentication wherever possible.
        </p>
        <p className="text-gray-700 mb-4">
          Keep your software and devices updated to the latest security patches. Avoid sharing login credentials or codes with anyone.
        </p>
        <p className="text-gray-700 mb-4">
          Contact our support team immediately if you notice any suspicious activity or potential security threats.
        </p>
        <img
          src="https://images.unsplash.com/photo-1591696331119-634f5c9f25b8?auto=format&fit=crop&w=600&q=80"
          alt="User Security Tips"
          className="mt-6 mx-auto rounded-xl shadow-lg w-96"
        />
      </section>
    </div>
  );
}
