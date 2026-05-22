import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  FileText,
  Globe,
  Handshake,
  Mail,
  Scale,
  Shield,
} from "lucide-react";

const termsSections = [
  {
    icon: FileText,
    title: "Use of This Website",
    text: "You may browse this website to learn about EmmaTech, our services, and how to contact us. Please do not misuse the site, attempt to disrupt it, or use it for unlawful purposes.",
  },
  {
    icon: Handshake,
    title: "Service Inquiries",
    text: "Submitting a contact form or quote request does not automatically create a client relationship. A project begins only after scope, timeline, payment, and terms are agreed.",
  },
  {
    icon: Scale,
    title: "Project Agreements",
    text: "Specific work may require a separate proposal, invoice, agreement, or statement of work. Those project terms will apply in addition to these website terms.",
  },
  {
    icon: Shield,
    title: "Intellectual Property",
    text: "The EmmaTech name, website content, visuals, text, and branding belong to EmmaTech or their respective owners. Do not copy or reuse them without permission.",
  },
  {
    icon: Globe,
    title: "Third-Party Links",
    text: "Our website may link to external websites or tools. We are not responsible for third-party content, policies, or availability.",
  },
  {
    icon: AlertTriangle,
    title: "Limitations",
    text: "We try to keep website information accurate, but it may change over time. The website is provided for general information and does not guarantee specific project outcomes.",
  },
];

const responsibilities = [
  "Provide accurate information when contacting us",
  "Use the website lawfully and respectfully",
  "Do not copy website content without permission",
  "Review project-specific terms before work begins",
];

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="relative pt-32 pb-20 bg-gray-950 text-white overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80"
          alt="Terms and documents"
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
              Terms of Service
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
              The basic terms for using EmmaTech's website
            </h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
              These terms explain how visitors should use our website and what
              to expect when contacting EmmaTech about services or project work.
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
              <Scale className="h-9 w-9 text-blue-600 mb-5" />
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Simple terms for a service website
              </h2>
              <p className="text-gray-600 leading-relaxed">
                These terms are written for EmmaTech as a technology services
                company. Project-specific work can have separate written terms.
              </p>
            </div>
          </aside>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {termsSections.map((section, index) => {
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
              Visitor Responsibilities
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-5">
              Clear expectations keep things simple
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              By using this website or sending us information, you agree to use
              the site responsibly and provide accurate details when requesting
              help, support, or a quote.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-100 p-6">
            <div className="space-y-4">
              {responsibilities.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
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
              Questions about these terms?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Contact us if you need clarification before using the site or
              starting a project.
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
