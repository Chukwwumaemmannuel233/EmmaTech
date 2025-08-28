// import React from "react";
import { motion } from "framer-motion";
import { FileText, Shield, Lock, AlertTriangle, Info } from "lucide-react";

const termsSections = [
  {
    title: "Introduction",
    description: `These Terms of Service govern your access and use of our platform. By using our services, you agree to these terms. Please read them carefully before proceeding.`,
    icon: FileText,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "User Responsibilities",
    description: `You agree to provide accurate information, respect other users, and use the service only for lawful purposes. Any misuse may lead to account suspension or termination.`,
    icon: Shield,
    image:
      "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Accounts & Security",
    description: `You are responsible for maintaining the confidentiality of your login credentials. Any activities under your account are your responsibility, so please use strong passwords.`,
    icon: Lock,
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Intellectual Property",
    description: `All content, branding, and design belong to us or our licensors. You may not copy, distribute, or exploit our materials without prior written permission.`,
    icon: FileText,
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Limitations of Liability",
    description: `We are not liable for any damages resulting from your use of the service. The platform is provided "as is," without warranties of any kind.`,
    icon: AlertTriangle,
    image:
      "https://images.unsplash.com/photo-1505238680356-667803448bb6?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Termination",
    description: `We reserve the right to suspend or terminate accounts that violate these Terms of Service or engage in harmful activities.`,
    icon: Info,
    image:
      "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Changes to Terms",
    description: `We may update these Terms periodically. Significant changes will be communicated through our website or email notifications. Continued use implies acceptance.`,
    icon: Shield,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
  },
];

export default function TermsOfServicePage() {
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
          Terms of Service
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl max-w-2xl mx-auto opacity-90"
        >
          Understand the rules and guidelines for using our platform.
        </motion.p>
      </section>

      {/* Terms Sections */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {termsSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row items-center gap-6 hover:shadow-xl transition-shadow duration-300"
            >
              <section.icon className="h-12 w-12 text-indigo-600" />
              <div className="flex-1">
                <h3 className="font-semibold text-xl mb-2">{section.title}</h3>
                <p className="text-gray-600">{section.description}</p>
              </div>
              <img
                src={section.image}
                alt={section.title}
                className="w-32 h-20 object-cover rounded-lg shadow-md"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-20 max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-6 text-gray-900"
        >
          Agreement
        </motion.h2>
        <p className="text-gray-700 mb-4">
          By using our services, you acknowledge that you have read, understood, and agree to these Terms of Service.
        </p>
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80"
          alt="Agreement Illustration"
          className="mt-6 mx-auto rounded-xl shadow-lg w-96"
        />
      </section>

      {/* Contact / Support Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-700 to-indigo-500 text-white text-center">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-6"
        >
          Need Help?
        </motion.h2>
        <p className="mb-6 max-w-xl mx-auto">
          If you have questions or need clarification about these Terms of Service, our team is ready to assist you.
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
