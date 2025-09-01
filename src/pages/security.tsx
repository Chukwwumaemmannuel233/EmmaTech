// import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Database, Key, AlertCircle } from "lucide-react";

const securityMeasures = [
  {
    title: "Encryption",
    description:
      "All user data is encrypted in transit (TLS/HTTPS) and at rest using AES-256 standards to ensure maximum protection.",
    icon: Lock,
    image: "https://media.istockphoto.com/id/2163352281/photo/securing-cybersecurity-a-businesswoman-protecting-personal-data-preventing-online-theft.jpg?s=612x612&w=0&k=20&c=l4xijI0LAb4avRfJ1-DUUClQe1gDKpBJW5GnIktCfTo=",
  },
  {
    title: "Data Storage & Backup",
    description:
      "Data is stored in secure servers with regular backups. Redundant systems ensure high availability and data integrity.",
    icon: Database,
    image: "https://media.istockphoto.com/id/2171255840/photo/backup-storage-data-internet-technology-business-concept.jpg?s=612x612&w=0&k=20&c=9mxidn15HLkmzBgB3HhYL8ltR4EGLatdmuGq6Vf3qwA=",
  },
  {
    title: "Access Control",
    description:
      "Strict access control is enforced internally. Multi-factor authentication (MFA) is required for all administrative access.",
    icon: Key,
    image: "https://media.istockphoto.com/id/2174920422/photo/cyber-security-concepts-secure-encryption-protection-of-personal-data-access-network-security.jpg?s=612x612&w=0&k=20&c=6TU4poVxYsrbRFLJuF5iICsjWbXTSc1HP_NlVG9WWlo=",
  },
  {
    title: "Threat Monitoring",
    description:
      "Continuous monitoring for unusual activity and potential threats. Rapid response procedures are in place to mitigate risks.",
    icon: Shield,
    image: "https://media.istockphoto.com/id/2180695620/photo/scam-alert-warning-with-cybersecurity-icons-a-person-using-laptop-warning-sign-for-scams-with.jpg?s=612x612&w=0&k=20&c=lLVjY7lE5HLCFy3lMWJeX4BeDbCVPC-jsNYXMmop4C4=",
  },
  {
    title: "Incident Handling",
    description:
      "If a security incident occurs, we immediately assess, contain, and resolve the issue. Users are notified promptly with recommended actions.",
    icon: AlertCircle,
    image: "https://media.istockphoto.com/id/2197578986/photo/risk-management-alert-ai-driven-system-for-detecting-critical-warnings-caution-notifications.jpg?s=612x612&w=0&k=20&c=zc_GNF28jEsrPOw_VxJvS38wGIeMy9mClpU-FasWbTM=",
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
          src="https://media.istockphoto.com/id/2203259620/photo/cloud-based-file-storage-with-advanced-security-encrypted-data-protection-and-ai-backup.jpg?s=612x612&w=0&k=20&c=DnK-LKq7OyzMn-Hapk0E79vHqRK5jeJGpbnB3hNXn0Q="
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
          src="https://media.istockphoto.com/id/2156387160/photo/hispanic-latin-american-couple-software-engineer-developer-use-computer-work-on-program.jpg?s=612x612&w=0&k=20&c=4MLKAJBBRdiPbhBfIWV4-raQzm5ssvi-Pi4-G8km_dU="
          alt="User Security Tips"
          className="mt-6 mx-auto rounded-xl shadow-lg w-96"
        />
      </section>
    </div>
  );
}
