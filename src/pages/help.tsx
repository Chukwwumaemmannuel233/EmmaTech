import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  ChevronDown,
  User,
  CreditCard,
  Settings,
  HelpCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function HelpPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    {
      title: "Account Issues",
      icon: <User className="w-6 h-6 text-indigo-500" />,
      image:
        "https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?auto=format&fit=crop&w=800&q=80",
      faqs: [
        {
          q: "How do I reset my password?",
          a: "Click on 'Forgot Password' at login, enter your email, and follow the reset instructions.",
        },
        {
          q: "How can I delete my account?",
          a: "Go to Settings > Account > Delete Account. Once deleted, all your data will be permanently removed.",
        },
        {
          q: "How do I change my email address?",
          a: "Navigate to Settings > Profile and update your email. You’ll need to verify the new address.",
        },
        {
          q: "Can I have multiple accounts?",
          a: "Yes, but each account must use a unique email address.",
        },
        {
          q: "I didn’t receive my verification email?",
          a: "Check your spam folder, and if it’s not there, request another verification email.",
        },
        {
          q: "How do I secure my account?",
          a: "Enable 2FA (Two-Factor Authentication) under Settings > Security for maximum protection.",
        },
      ],
    },
    {
      title: "Billing & Payments",
      icon: <CreditCard className="w-6 h-6 text-indigo-500" />,
      image:
        "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=800&q=80",
      faqs: [
        {
          q: "What payment methods do you accept?",
          a: "We accept Visa, MasterCard, PayPal, and local bank transfers depending on your region.",
        },
        {
          q: "How do I download my invoices?",
          a: "Go to Settings > Billing > Invoices. You can view and download your past invoices there.",
        },
        {
          q: "Can I change my billing cycle?",
          a: "Yes, switch between monthly and yearly plans anytime under Settings > Billing.",
        },
        {
          q: "Do you offer refunds?",
          a: "Refund requests are valid within 14 days of purchase. Contact support to initiate.",
        },
        {
          q: "What happens if my payment fails?",
          a: "We’ll retry automatically and notify you by email. Please update your payment details.",
        },
        {
          q: "Is my payment information secure?",
          a: "Yes, we use industry-standard encryption and comply with PCI DSS regulations.",
        },
      ],
    },
    {
      title: "Technical Support",
      icon: <Settings className="w-6 h-6 text-indigo-500" />,
      image:
        "https://plus.unsplash.com/premium_photo-1726797757852-d718e284b86d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVjaGluaWNhbCUyMHN1cHBvcnR8ZW58MHx8MHx8fDA%3D",
      faqs: [
        {
          q: "Why can’t I log in?",
          a: "Ensure your internet is stable, clear cache, and try again. If the issue persists, contact support.",
        },
        {
          q: "How do I update the app?",
          a: "Visit the App Store/Play Store or download the latest version from our website.",
        },
        {
          q: "Why is my app crashing?",
          a: "Check for updates, restart your device, and if the problem continues, reinstall the app.",
        },
        {
          q: "How do I clear my cache?",
          a: "Go to browser/app settings, clear cache and cookies, then log back in.",
        },
        {
          q: "Does the app work offline?",
          a: "Some features work offline, but full functionality requires internet access.",
        },
        {
          q: "How do I report a bug?",
          a: "Use the in-app feedback tool under Help > Report a Bug or email support.",
        },
      ],
    },
    {
      title: "General Questions",
      icon: <HelpCircle className="w-6 h-6 text-indigo-500" />,
      image:
        "https://images.unsplash.com/photo-1606595898127-a06c52b4e2b3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEdlbmVyYWwlMjBRdWVzdGlvbnN8ZW58MHx8MHx8fDA%3D0",
      faqs: [
        {
          q: "Where can I contact support?",
          a: "You can reach us via the Help form or email support@example.com.",
        },
        {
          q: "Do you have a free trial?",
          a: "Yes, we offer a 14-day free trial on all plans.",
        },
        {
          q: "Do you support integrations?",
          a: "We integrate with Slack, Zapier, Google Drive, and more.",
        },
        {
          q: "Can I collaborate with my team?",
          a: "Yes, invite team members under Settings > Team and assign roles.",
        },
        {
          q: "Do you offer training?",
          a: "Yes, we provide onboarding sessions and video tutorials.",
        },
        {
          q: "Where are you located?",
          a: "Our headquarters is in Abuja, Nigeria, but we serve clients worldwide.",
        },
      ],
    },
  ];

  const filteredCategories = categories
    .map((cat) => ({
      ...cat,
      faqs: cat.faqs.filter(
        (faq) =>
          faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.a.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((cat) => cat.faqs.length > 0);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-4"
        >
          How can we help you?
        </motion.h1>
        <p className="mb-6 text-lg opacity-90">
          Search our knowledge base or browse FAQs by category.
        </p>

        <div className="max-w-xl mx-auto flex items-center bg-white rounded-full shadow-md overflow-hidden">
          <Search className="ml-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search for help..."
            className="flex-1 px-4 py-3 outline-none text-gray-700"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Why Help Center Section */}
      <section className="py-16 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <motion.img
          src="https://plus.unsplash.com/premium_photo-1661434914660-c68d9fd54753?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3VzdG9tZXIlMjBzdXBwb3J0fGVufDB8fDB8fHww"
          alt="Customer support"
          className="rounded-2xl shadow-lg"
          whileHover={{ scale: 1.05 }}
        />
        <div>
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Why Use Our Help Center?
          </h2>
          <p className="text-gray-700 mb-6">
            Our Help Center is designed to give you quick answers, reduce
            waiting time, and guide you through best practices. With FAQs,
            tutorials, and dedicated support staff, we ensure that you spend
            more time focusing on your goals and less time troubleshooting.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center mr-3">
                ✓
              </span>
              <span>Comprehensive knowledge base with guides</span>
            </li>
            <li className="flex items-start">
              <span className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center mr-3">
                ✓
              </span>
              <span>Step-by-step tutorials and best practices</span>
            </li>
            <li className="flex items-start">
              <span className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center mr-3">
                ✓
              </span>
              <span>Dedicated support team for escalated issues</span>
            </li>
          </ul>
        </div>
      </section>

      {/* FAQ Categories */}
      <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10">
        {filteredCategories.map((category, catIndex) => (
          <motion.div
            key={catIndex}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <motion.img
              src={category.image}
              alt={category.title}
              className="h-40 w-full object-cover"
              whileHover={{ scale: 1.05 }}
            />
            <div className="p-6">
              <div className="flex items-center gap-3 mb-6">
                {category.icon}
                <h2 className="text-xl font-semibold">{category.title}</h2>
              </div>

              {category.faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="mb-2 rounded-lg"
                >
                  <button
                    onClick={() =>
                      setOpenIndex(
                        openIndex === `${catIndex}-${index}`
                          ? null
                          : `${catIndex}-${index}`
                      )
                    }
                    className="w-full flex justify-between items-center py-3 border-b text-left"
                  >
                    <span className="font-medium">{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 transform transition-transform ${
                        openIndex === `${catIndex}-${index}` ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: openIndex === `${catIndex}-${index}` ? 1 : 0,
                      height: openIndex === `${catIndex}-${index}` ? "auto" : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 text-gray-600 overflow-hidden"
                  >
                    {faq.a}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Extra Help Section */}
      <motion.div
        className="relative text-center py-20 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-black to-blue-600 z-0"></div>

        <div className="relative z-10">
          <h3 className="text-2xl font-semibold mb-4 text-white">
            Still need help?
          </h3>
          <p className="mb-6 max-w-lg mx-auto text-gray-200">
            Can’t find what you’re looking for? Our support team is here to help
            you with any issue.
          </p>
          <motion.button
            className="bg-indigo-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-indigo-700"
            whileHover={{ scale: 1.05 }}
          >
            <Link
              to="/support" // replace with your route
              className="bg-indigo-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-indigo-700"
            >
              Contact Support
            </Link>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
