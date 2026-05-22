import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Cookie,
  FileText,
  Globe,
  Mail,
  Settings,
  ShieldCheck,
} from "lucide-react";

const cookieTypes = [
  {
    icon: ShieldCheck,
    title: "Essential Cookies",
    text: "These help the website load correctly, keep forms stable, and support basic security.",
  },
  {
    icon: Settings,
    title: "Preference Cookies",
    text: "These may remember choices such as display settings or saved preferences if we add them.",
  },
  {
    icon: BarChart3,
    title: "Analytics Cookies",
    text: "These help us understand which pages visitors use so we can improve the website.",
  },
  {
    icon: Globe,
    title: "Third-Party Cookies",
    text: "Some embedded tools or external services may set their own cookies under their own policies.",
  },
];

const howItWorks = [
  "Your browser visits the website",
  "The website may save a small text file",
  "Your browser sends it back on later visits",
  "The site uses it to remember or measure something",
];

const choices = [
  "Block or delete cookies in your browser settings",
  "Use private browsing when you do not want cookies saved",
  "Clear existing cookies from your device",
  "Contact us if you have questions about website tracking",
];

export default function CookiesPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="relative pt-32 pb-20 bg-gray-950 text-white overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=80"
          alt="Website settings and security"
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
              Cookie Policy
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
              How cookies may work on EmmaTech's website
            </h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
              This page explains the small browser files that may help our
              website work properly, understand visits, and improve the user
              experience.
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
              <Cookie className="h-9 w-9 text-blue-600 mb-5" />
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                A simple cookie note
              </h2>
              <p className="text-gray-600 leading-relaxed">
                EmmaTech is a service company website. Cookies here are mainly
                about basic functionality, preferences, and understanding how
                visitors use the site.
              </p>
            </div>
          </aside>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cookieTypes.map((section, index) => {
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
              How Cookies Work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-5">
              Small files, simple purpose
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              A cookie is a small text file saved by your browser. It can help a
              website remember a visit, keep a setting, or measure basic usage.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-100 p-6">
            <div className="space-y-4">
              {howItWorks.map((item, index) => (
                <div key={item} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center font-semibold text-sm">
                    {index + 1}
                  </div>
                  <span className="text-gray-700 pt-1">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="bg-white border border-gray-100 shadow-sm p-8">
            <FileText className="h-9 w-9 text-blue-600 mb-5" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Your Choices
            </h2>
            <div className="space-y-4">
              {choices.map((choice) => (
                <div key={choice} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5" />
                  <span className="text-gray-700">{choice}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-gray-100 shadow-sm p-8">
            <Mail className="h-9 w-9 text-blue-600 mb-5" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Questions about cookies?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              If you want to understand how cookies, analytics, or browser
              storage may apply to this website, contact us and we will keep the
              answer clear.
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
