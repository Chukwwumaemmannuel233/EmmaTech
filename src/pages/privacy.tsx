import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Cookie,
  Database,
  FileText,
  Lock,
  Mail,
  Shield,
  UserRound,
} from "lucide-react";

const policySections = [
  {
    icon: UserRound,
    title: "Information We Collect",
    text: "We may collect your name, email address, phone number, company name, and message details when you contact us, request a quote, or subscribe to updates.",
  },
  {
    icon: FileText,
    title: "How We Use Information",
    text: "We use your information to reply to messages, understand project requests, provide support, improve our services, and send occasional updates when you subscribe.",
  },
  {
    icon: Cookie,
    title: "Cookies & Analytics",
    text: "Our website may use basic cookies or analytics tools to understand site usage and improve user experience. You can control cookies through your browser settings.",
  },
  {
    icon: Shield,
    title: "Data Sharing",
    text: "We do not sell your personal information. We only share data when needed to operate the website, respond to requests, comply with the law, or work with trusted service providers.",
  },
  {
    icon: Lock,
    title: "Data Security",
    text: "We take reasonable steps to protect the information you send to us, but no website or online transmission can be guaranteed to be completely secure.",
  },
  {
    icon: Database,
    title: "Data Retention",
    text: "We keep information only as long as needed for communication, support, business records, legal obligations, or legitimate operational needs.",
  },
];

const rights = [
  "Ask what personal information we have about you",
  "Request corrections to inaccurate information",
  "Ask us to delete your information where appropriate",
  "Unsubscribe from newsletter or marketing messages",
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="relative pt-32 pb-20 bg-gray-950 text-white overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=1600&q=80"
          alt="Privacy and data protection"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-blue-950/90 to-teal-900/75" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="text-blue-300 font-semibold uppercase tracking-wide text-sm">
              Privacy Policy
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
              How EmmaTech handles your information
            </h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
              This page explains what information we may collect through our
              website, contact forms, quote requests, and newsletter, and how we
              use it responsibly.
            </p>
            <p className="text-sm text-blue-200 mt-6">
              Last updated: May 22, 2026
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr] gap-10">
          <aside>
            <div className="bg-white border border-gray-100 shadow-sm p-6 sticky top-24">
              <Lock className="h-9 w-9 text-blue-600 mb-5" />
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Simple privacy for a service website
              </h2>
              <p className="text-gray-600 leading-relaxed">
                EmmaTech is a technology services company. This policy is
                written for the information we currently collect through normal
                website interactions, not a large user account platform.
              </p>
            </div>
          </aside>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {policySections.map((section, index) => {
              const Icon = section.icon;

              return (
                <motion.article
                  key={section.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                  className="bg-white border border-gray-100 p-6 shadow-sm"
                >
                  <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center mb-5">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {section.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {section.text}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-blue-600 font-semibold uppercase tracking-wide text-sm">
              Your Choices
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-5">
              You stay in control of your information
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              If you have shared information with us through a form, email, or
              newsletter signup, you can contact us about it at any time.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-100 p-6">
            <div className="space-y-4">
              {rights.map((right) => (
                <div key={right} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5" />
                  <span className="text-gray-700">{right}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-100 shadow-sm p-8 md:p-10 text-center">
            <Mail className="h-10 w-10 text-blue-600 mx-auto mb-5" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Questions about privacy?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Contact us if you want to ask about your information or request an
              update.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact EmmaTech
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
