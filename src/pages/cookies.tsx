import { motion } from "framer-motion";
import { Cookie, Lock, Settings, Globe, Info, Shield, UserCheck } from "lucide-react";

const cookiesSections = [
  {
    title: "Introduction",
    description: `This Cookies Policy explains how our website uses cookies and similar technologies to provide you with a better browsing experience.`,
    icon: Cookie,
    image:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "What Are Cookies?",
    description: `Cookies are small text files placed on your device to store information. They help us remember your preferences and improve website functionality.`,
    icon: Info,
    image:
      "https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Types of Cookies We Use",
    description: `We use essential, performance, functional, and advertising cookies. Each type serves a specific purpose to enhance your user experience.`,
    icon: Settings,
    image:
      "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Why We Use Cookies",
    description: `Cookies help us provide secure logins, save preferences, analyze website traffic, and show you relevant content. Without them, many features wouldn’t work properly.`,
    icon: Shield,
    image:
      "https://images.unsplash.com/photo-1525186402429-b4ff38bedbec?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Managing Cookies",
    description: `You can manage or disable cookies via your browser settings. Please note that disabling certain cookies may affect site functionality.`,
    icon: Lock,
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Third-Party Cookies",
    description: `Some cookies are set by third-party services like analytics and ads providers. These cookies follow their own privacy practices.`,
    icon: Globe,
    image:
      "https://images.unsplash.com/photo-1584438784894-089d6a62b8d5?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Your Rights & Choices",
    description: `You can accept, refuse, or delete cookies at any time. We respect your privacy preferences and provide tools to help you manage them.`,
    icon: UserCheck,
    image:
      "https://images.unsplash.com/photo-1605902711622-3fbb9e4bca92?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Policy Updates",
    description: `We may update this Cookies Policy from time to time. Any changes will be posted on this page with an updated date.`,
    icon: Info,
    image:
      "https://images.unsplash.com/photo-1581090700227-59aa3de0f3ee?auto=format&fit=crop&w=600&q=80",
  },
];

export default function CookiesPolicyPage() {
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
          Cookies Policy
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl max-w-2xl mx-auto opacity-90"
        >
          Learn how we use cookies to improve your browsing experience, personalize content, and secure your data.
        </motion.p>
      </section>

      {/* Cookies Sections */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {cookiesSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row items-center gap-6 hover:shadow-xl transition-shadow duration-300"
            >
              <section.icon className="h-12 w-12 text-indigo-600 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="font-semibold text-xl mb-2">{section.title}</h3>
                <p className="text-gray-600">{section.description}</p>
              </div>
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
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
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-6 text-gray-900"
        >
          Stay in Control of Your Preferences
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-700 mb-4"
        >
          You can review and manage your cookie preferences anytime to ensure your browsing experience aligns with your privacy choices.
        </motion.p>
        <motion.img
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          src="https://images.unsplash.com/photo-1601597112204-06d0f55c23ab?auto=format&fit=crop&w=600&q=80"
          alt="Cookies Illustration"
          className="mt-6 mx-auto rounded-xl shadow-lg w-96"
        />
      </section>

      {/* Contact / Support Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-700 to-indigo-500 text-white text-center">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-6"
        >
          Need Help Managing Cookies?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 max-w-xl mx-auto"
        >
          If you have questions or need help with cookie settings, our support team is here for you. We’ll make sure you stay in control of your data.
        </motion.p>
        <motion.a
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          href="/support"
          className="inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300"
        >
          Contact Support
        </motion.a>
      </section>
    </div>
  );
}
