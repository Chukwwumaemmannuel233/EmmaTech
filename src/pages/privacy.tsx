// import React from "react";
import { motion } from "framer-motion";
import { Lock, FileText, Shield, Info, Globe } from "lucide-react";

const privacySections = [
  {
    title: "Introduction",
    description: `We value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information.`,
    icon: FileText,
    image: "https://images.unsplash.com/photo-1581090700227-59aa3de0f3ee?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Information Collection",
    description: `We collect information you provide directly, such as your name, email, and payment details. We also collect data automatically via cookies, logs, and analytics tools.`,
    icon: Lock,
    image: "https://images.unsplash.com/photo-1605902711622-3fbb9e4bca92?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Use of Information",
    description: `Your data helps us provide, improve, and personalize our services. We use information for account management, customer support, product enhancements, and security purposes.`,
    icon: Shield,
    image: "https://images.unsplash.com/photo-1605902711622-6c57b5b81d1c?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Data Sharing & Security",
    description: `We do not sell your personal information. Data is shared only with trusted partners under strict confidentiality agreements. All information is encrypted in transit and at rest.`,
    icon: Lock,
    image: "https://images.unsplash.com/photo-1591696331119-634f5c9f25b8?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "User Rights",
    description: `You have the right to access, update, or delete your personal data. You may also restrict processing or object to marketing communications at any time.`,
    icon: FileText,
    image: "https://images.unsplash.com/photo-1581091012184-0b5d2b6b7c11?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Cookies & Tracking",
    description: `We use cookies and analytics to improve the user experience and understand website usage. You can manage your cookie preferences in your browser settings.`,
    icon: Globe,
    image: "https://images.unsplash.com/photo-1559028012-481c0aedd51c?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Children's Privacy",
    description: `Our services are not intended for children under 13. We do not knowingly collect data from children. If we learn that data has been collected from children, it will be deleted immediately.`,
    icon: Info,
    image: "https://images.unsplash.com/photo-1581091012184-3d8c2d54d7c1?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Third-Party Services",
    description: `We may use third-party services for analytics, payments, hosting, or communication. These providers follow strict privacy standards and contractual obligations.`,
    icon: Shield,
    image: "https://images.unsplash.com/photo-1590608897129-79bc9e7e3ee1?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Legal Basis for Processing",
    description: `We process your personal data only when we have a legal basis, such as consent, contractual necessity, legal obligation, or legitimate interest.`,
    icon: Info,
    image: "https://images.unsplash.com/photo-1581091012184-3d8c2d54d7c1?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Data Retention",
    description: `We retain your personal data only for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce agreements.`,
    icon: Lock,
    image: "https://images.unsplash.com/photo-1590608897129-79bc9e7e3ee1?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "International Transfers",
    description: `Some of your information may be transferred and stored in countries outside your residence. We ensure appropriate safeguards are in place to protect your data.`,
    icon: Globe,
    image: "https://images.unsplash.com/photo-1559028012-481c0aedd51c?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Marketing Communications",
    description: `With your consent, we may send marketing emails. You can unsubscribe anytime by clicking the “unsubscribe” link in emails or contacting support.`,
    icon: FileText,
    image: "https://images.unsplash.com/photo-1581090700227-59aa3de0f3ee?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Changes to This Policy",
    description: `We may update this Privacy Policy periodically. Review it regularly. Significant changes will be communicated via email or website notifications.`,
    icon: Lock,
    image: "https://images.unsplash.com/photo-1590608897129-79bc9e7e3ee1?auto=format&fit=crop&w=600&q=80",
  },
];

export default function PrivacyPolicyPage() {
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
          Privacy Policy
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl max-w-2xl mx-auto opacity-90"
        >
          Your privacy is our top priority. Learn how we collect, use, and protect your personal information.
        </motion.p>
      </section>

      {/* Privacy Sections */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {privacySections.map((section, index) => (
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
          Your Trust Matters
        </motion.h2>
        <p className="text-gray-700 mb-4">
          We are committed to maintaining transparency and keeping your personal data safe. By using our services, you agree to the practices outlined in this Privacy Policy.
        </p>
        <img
          src="https://images.unsplash.com/photo-1581092334129-3d8c2d54d7c1?auto=format&fit=crop&w=600&q=80"
          alt="Privacy Illustration"
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
          Have Questions?
        </motion.h2>
        <p className="mb-6 max-w-xl mx-auto">
          If you have any questions or concerns about your privacy or our policies, feel free to reach out to our support team. We're here to help you understand and manage your data.
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
