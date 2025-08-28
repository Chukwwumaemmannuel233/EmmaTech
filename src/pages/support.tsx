import { motion } from "framer-motion";

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 via-purple-700 to-indigo-500 text-white py-24 px-6 text-center overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            We’re Here to Help You
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl opacity-90 mb-8"
          >
            Our support team is ready to answer your questions and help solve
            any issues. Reach out and we’ll get back to you as quickly as possible.
          </motion.p>
        </div>

        {/* Decorative Images */}
        <motion.img
          src="https://images.unsplash.com/photo-1605902711622-cfb43c44322e?auto=format&fit=crop&w=600&q=80"
          alt="Support Illustration"
          className="absolute right-0 bottom-0 w-64 md:w-96 opacity-30"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.3 }}
          transition={{ duration: 1 }}
        />
        <motion.img
          src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=600&q=80"
          alt="Team Assistance"
          className="absolute left-0 top-10 w-48 md:w-72 opacity-30"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.3 }}
          transition={{ duration: 1 }}
        />
      </section>

      {/* Highlighted Note Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-r from-emerald-400 via-indigo-500 to-purple-600 text-white rounded-3xl p-12 shadow-lg overflow-hidden flex flex-col md:flex-row items-center gap-8"
        >
          <img
            src="https://plus.unsplash.com/premium_photo-1661409321575-298f9b09d512?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dGVjaCUyMHN1cHBvcnR8ZW58MHx8MHx8fDA%3D"
            alt="Support Illustration"
            className="w-48 md:w-64 rounded-xl shadow-lg"
          />
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Immediate Assistance?
            </h2>
            <p className="mb-6 text-lg md:text-xl opacity-90">
              Our support team is always ready to help. Reach out to us through email, phone, or our online contact form. We're here to make sure you get the support you need, when you need it.
            </p>
            <ul className="space-y-3">
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:support@example.com" className="underline hover:text-gray-200">
                  support@example.com
                </a>
              </li>
              <li>
                <strong>Phone:</strong>{" "}
                <a href="tel:+1234567890" className="underline hover:text-gray-200">
                  +1 (234) 567-890
                </a>
              </li>
              <li>
                <strong>Working Hours:</strong> Mon - Fri, 9:00 AM - 6:00 PM
              </li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Support Info Section */}
      <section className="py-20 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h2
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold mb-4 text-gray-900"
          >
            How to Reach Us
          </motion.h2>
          <motion.p
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-700 mb-6"
          >
            You can contact our support team directly via email, or use our
            online contact form. We strive to respond to every inquiry within
            24 hours.
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block"
          >
            <a
              href="mailto:support@example.com"
              className="bg-indigo-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-indigo-700 transition-colors"
            >
              Email Support
            </a>
          </motion.div>
        </div>
        <motion.img
          src="https://images.unsplash.com/photo-1709715357479-591f9971fb05?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VzdG9tZXIlMjBzdXBwb3J0fGVufDB8fDB8fHww"
          alt="Customer Support"
          className="rounded-2xl shadow-lg w-full"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </section>

      {/* FAQ Preview Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h3
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-2xl font-semibold mb-4"
          >
            Frequently Asked Questions
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-600 mb-10"
          >
            Here are some answers to the most common questions from our users.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-white p-6 rounded-xl shadow-md text-left cursor-pointer transition-transform"
            >
              <h4 className="font-semibold mb-2">How do I reset my password?</h4>
              <p className="text-gray-600 text-sm">
                Click “Forgot Password” on the login page and follow the instructions.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-white p-6 rounded-xl shadow-md text-left cursor-pointer transition-transform"
            >
              <h4 className="font-semibold mb-2">How do I contact support?</h4>
              <p className="text-gray-600 text-sm">
                You can reach us via email or our contact form anytime.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
